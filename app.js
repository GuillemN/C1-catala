/**
 * C1 CATALÀ - APP LOGIC & INTERACTIVITY
 * Gestor d'estat, autocorrecció immediata, exàmens cronometrats i estadístiques
 */

(function () {
  'use strict';

  // --- Estat Global de l'Aplicació ---
  const state = {
    currentTab: 'practice',
    currentCategory: 'all',
    searchQuery: '',
    filteredQuestions: [],
    currentQuestionIndex: 0,
    
    // Progrés de l'usuari desat a LocalStorage
    userProgress: {
      answers: {}, // id: { isCorrect, userAnswer, attempts, showHint, showSolution }
      streak: 0,
      soundEnabled: true,
      theme: 'light'
    },

    // Estat del Simulacre d'Examen
    exam: {
      active: false,
      examId: 'exam1',
      timeRemaining: 65 * 60, // 65 minuts en segons
      timerInterval: null,
      answers: {},
      submitted: false
    }
  };

  // --- Inicialització d'Audio (Web Audio API per sintetitzar efectes sonors) ---
  let audioCtx = null;
  function playSound(type) {
    if (!state.userProgress.soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'correct') {
        // To suau ascendent d'èxit (harmònic i agradable)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // To greu suau de correcció
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.linearRampToValueAtTime(180, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'click') {
        // Clic molt suau
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      console.warn("Audio Context no disponible:", e);
    }
  }

  // --- Persistència a LocalStorage ---
  function loadPersistedData() {
    try {
      const saved = localStorage.getItem('c1_catala_progress_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        state.userProgress = Object.assign(state.userProgress, parsed);
      }
    } catch (e) {
      console.warn("Error carregant dades de LocalStorage:", e);
    }
    
    // Aplicar tema
    if (state.userProgress.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateSoundButtonIcon();
    updateThemeButtonIcon();
  }

  function saveProgress() {
    try {
      localStorage.setItem('c1_catala_progress_v2', JSON.stringify({
        answers: state.userProgress.answers,
        streak: state.userProgress.streak,
        soundEnabled: state.userProgress.soundEnabled,
        theme: state.userProgress.theme
      }));
    } catch (e) {
      console.warn("Error desant dades:", e);
    }
  }

  // --- Normalització intel·ligent de respostes C1 ---
  function normalizeText(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/[’´`]/g, "'") // Unificar apòstrofs
      .replace(/\s+/g, ' ')   // Col·lapsar espais múltiples
      .replace(/[.,;:!?]+$/, ''); // Eliminar signes de puntuació al final
  }

  function isAnswerCorrect(question, userAnswer) {
    if (userAnswer === undefined || userAnswer === null) return false;

    if (question.type === 'multiple_choice') {
      return parseInt(userAnswer, 10) === question.correctIndex;
    }

    const cleanUser = normalizeText(userAnswer).toLowerCase();
    
    // Comprovar cadascuna de les opcions vàlides declarades a data.js
    return question.answers.some(ans => {
      const cleanTarget = normalizeText(ans).toLowerCase();
      if (cleanUser === cleanTarget) return true;

      // Suport per a separadors coma o barra (ex: "m'ho, sàpiga" vs "m'ho / sàpiga" vs "m'ho sàpiga")
      const userParts = cleanUser.split(/[,/ ]+/).filter(Boolean);
      const targetParts = cleanTarget.split(/[,/ ]+/).filter(Boolean);
      if (userParts.length > 1 && userParts.length === targetParts.length) {
        return userParts.every((p, idx) => p === targetParts[idx]);
      }
      return false;
    });
  }

  // --- Notificacions Toast visuals ---
  function showToast(message, icon = 'ℹ️') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // --- Actualització de la Barra d'Estadístiques Globals ---
  function updateGlobalStats() {
    const allQuestions = window.C1_DATA.activities;
    const totalCount = allQuestions.length;
    let completedCount = 0;
    let correctCount = 0;
    let wrongCount = 0;

    allQuestions.forEach(q => {
      const userStatus = state.userProgress.answers[q.id];
      if (userStatus && userStatus.answered) {
        completedCount++;
        if (userStatus.isCorrect) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const accuracy = completedCount > 0 ? Math.round((correctCount / completedCount) * 100) : 0;

    document.getElementById('stat-completed').textContent = `${completedCount} / ${totalCount}`;
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-wrong').textContent = wrongCount;
    document.getElementById('stat-streak').textContent = `🔥 ${state.userProgress.streak}`;
    document.getElementById('stat-accuracy').textContent = `${accuracy}% èxit`;

    const progressBar = document.getElementById('global-progress-bar');
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.round((completedCount / totalCount) * 100))}%`;
    }

    // Actualitzar comptador de la pestanya d'errors
    const errorsTabCount = document.getElementById('errors-tab-count');
    if (errorsTabCount) {
      errorsTabCount.textContent = wrongCount;
    }
  }

  // --- Filtres i Preparació de Preguntes ---
  function filterQuestions() {
    const all = window.C1_DATA.activities;
    const cat = state.currentCategory;
    const query = state.searchQuery.trim().toLowerCase();

    state.filteredQuestions = all.filter(q => {
      // Filtre de categoria o examen
      let matchesCategory = false;
      if (cat === 'all') {
        matchesCategory = true;
      } else if (cat === 'exam1' || cat === 'exam2' || cat === 'extra') {
        matchesCategory = (q.exam === cat);
      } else {
        matchesCategory = (q.category === cat);
      }

      // Filtre de cerca lliure
      let matchesSearch = true;
      if (query) {
        const textToSearch = [
          q.title,
          q.instruction,
          q.contextText || '',
          q.question || '',
          q.originalSentence || '',
          q.promptTemplate || '',
          q.explanation || '',
          ...(q.options || []),
          ...(q.answers || [])
        ].join(' ').toLowerCase();

        matchesSearch = textToSearch.includes(query);
      }

      return matchesCategory && matchesSearch;
    });

    // Ajustar l'índex actual si està fora de límits
    if (state.currentQuestionIndex >= state.filteredQuestions.length) {
      state.currentQuestionIndex = Math.max(0, state.filteredQuestions.length - 1);
    }

    renderNavigatorGrid();
    renderCurrentQuestion();
  }

  // --- Renderització del Navegador Lateral de Preguntes ---
  function renderNavigatorGrid() {
    const grid = document.getElementById('question-navigator-grid');
    const totalCountEl = document.getElementById('filtered-total-count');
    const indexDisplayEl = document.getElementById('current-q-index-display');
    
    if (!grid) return;
    grid.innerHTML = '';

    const list = state.filteredQuestions;
    totalCountEl.textContent = list.length;
    
    if (list.length === 0) {
      indexDisplayEl.textContent = '0 de 0';
      return;
    }

    indexDisplayEl.textContent = `${state.currentQuestionIndex + 1} de ${list.length}`;

    list.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-num-btn';
      btn.textContent = idx + 1;
      btn.title = `${q.title}`;

      if (idx === state.currentQuestionIndex) {
        btn.classList.add('active-current');
      }

      const qStatus = state.userProgress.answers[q.id];
      if (qStatus && qStatus.answered) {
        if (qStatus.isCorrect) {
          btn.classList.add('status-correct');
        } else {
          btn.classList.add('status-wrong');
        }
      }

      btn.addEventListener('click', () => {
        playSound('click');
        state.currentQuestionIndex = idx;
        renderNavigatorGrid();
        renderCurrentQuestion();
      });

      grid.appendChild(btn);
    });
  }

  // --- Renderització de la Targeta de Pregunta Activa ---
  function renderCurrentQuestion() {
    const container = document.getElementById('active-question-container');
    if (!container) return;

    const list = state.filteredQuestions;
    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3>Cap activitat trobada</h3>
          <p>No hi ha activitats que coincideixin amb el filtre seleccionat o la cerca «${escapeHtml(state.searchQuery)}».</p>
          <button class="btn btn-primary" id="btn-reset-filter">Mostra totes les activitats</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-filter');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.currentCategory = 'all';
          state.searchQuery = '';
          const searchInput = document.getElementById('search-input');
          if (searchInput) searchInput.value = '';
          highlightActiveCategoryPill();
          filterQuestions();
        });
      }
      return;
    }

    const q = list[state.currentQuestionIndex];
    const qState = state.userProgress.answers[q.id] || {
      answered: false,
      isCorrect: false,
      userAnswer: null,
      showHint: false,
      showSolution: false
    };

    // Resolució del nom de categoria i d'examen
    const examLabel = q.exam === 'exam1' ? 'Examen CAT-C1-39' :
                      q.exam === 'exam2' ? 'Nou Model C1' : 'Banc de Pràctica C1';
    
    const catObj = window.C1_DATA.categories.find(c => c.id === q.category) || { name: q.category, icon: '📌' };

    // Construcció de la targeta HTML
    let bodyHtml = '';

    if (q.type === 'fill_in') {
      // Reemplaçar {{BLANK}} per un input de text
      let blankReplacement = `<input type="text" id="fill-input-${q.id}" class="input-fill-blank ${qState.answered ? (qState.isCorrect ? 'correct' : 'wrong') : ''}" placeholder="..." value="${escapeHtml(qState.userAnswer || '')}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ${qState.answered && qState.isCorrect ? 'readonly' : ''} />`;
      let renderedContext = q.contextText.replace('{{BLANK}}', blankReplacement);

      bodyHtml = `
        <div class="context-box">${renderedContext}</div>
      `;
    } else if (q.type === 'sentence_transform') {
      // Transformació d'oracions
      let promptHtml = q.promptTemplate;
      // Suport per a 1 o 2 buits
      if (promptHtml.includes('{{BLANK1}}')) {
        let val1 = '';
        let val2 = '';
        if (qState.userAnswer && typeof qState.userAnswer === 'string') {
          const parts = qState.userAnswer.split(/[,/]+/);
          val1 = (parts[0] || '').trim();
          val2 = (parts[1] || '').trim();
        }
        promptHtml = promptHtml
          .replace('{{BLANK1}}', `<input type="text" id="trans-input-1-${q.id}" class="input-fill-blank ${qState.answered ? (qState.isCorrect ? 'correct' : 'wrong') : ''}" placeholder="buit 1" value="${escapeHtml(val1)}" autocomplete="off" />`)
          .replace('{{BLANK2}}', `<input type="text" id="trans-input-2-${q.id}" class="input-fill-blank ${qState.answered ? (qState.isCorrect ? 'correct' : 'wrong') : ''}" placeholder="buit 2" value="${escapeHtml(val2)}" autocomplete="off" />`);
      } else {
        promptHtml = promptHtml.replace('{{BLANK}}', `<input type="text" id="trans-input-${q.id}" class="input-fill-blank ${qState.answered ? (qState.isCorrect ? 'correct' : 'wrong') : ''}" placeholder="escriviu aquí..." value="${escapeHtml(qState.userAnswer || '')}" autocomplete="off" />`);
      }

      bodyHtml = `
        <div class="original-sentence-box">${escapeHtml(q.originalSentence)}</div>
        <div class="context-box" style="border-left: 4px solid var(--primary);">${promptHtml}</div>
      `;
    } else if (q.type === 'multiple_choice') {
      // Tipus test amb opcions
      const optionsLetters = ['a', 'b', 'c', 'd', 'e'];
      bodyHtml = `
        ${q.question ? `<div style="font-size: 1.12rem; font-weight: 700; margin-bottom: 1.25rem;">${escapeHtml(q.question)}</div>` : ''}
        <div class="options-grid">
          ${q.options.map((opt, i) => {
            let extraClass = '';
            if (qState.answered) {
              if (parseInt(qState.userAnswer, 10) === i) {
                extraClass = qState.isCorrect ? 'selected-correct' : 'selected-wrong';
              } else if (i === q.correctIndex) {
                extraClass = 'reveal-correct';
              }
            }
            return `
              <button class="option-btn ${extraClass}" data-option-index="${i}">
                <span class="option-prefix">${optionsLetters[i] || i + 1}</span>
                <span style="flex: 1;">${escapeHtml(opt)}</span>
                ${extraClass === 'selected-correct' || extraClass === 'reveal-correct' ? '<span style="color: var(--success); font-weight: 800;">✓</span>' : ''}
                ${extraClass === 'selected-wrong' ? '<span style="color: var(--danger); font-weight: 800;">✗</span>' : ''}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // Pista (Hint)
    let hintHtml = '';
    if (qState.showHint && q.hint) {
      hintHtml = `
        <div class="hint-banner">
          <span style="font-size: 1.3rem;">💡</span>
          <div><strong>Pista C1:</strong> ${escapeHtml(q.hint)}</div>
        </div>
      `;
    }

    // Banner de retroacció (Feedback) amb explicació gramatical
    let feedbackHtml = '';
    if (qState.answered) {
      if (qState.isCorrect) {
        feedbackHtml = `
          <div class="feedback-banner correct">
            <div class="feedback-icon">🎉</div>
            <div class="feedback-content">
              <h4>Molt bé! Resposta correcta!</h4>
              <p>Has encertat aquesta activitat de nivell C1.</p>
              ${q.explanation ? `<div class="feedback-explanation"><strong>Regla / Explicació:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
            </div>
          </div>
        `;
      } else {
        const correctAnswersText = q.type === 'multiple_choice' 
          ? `L'opció correcta és la (${['a','b','c','d'][q.correctIndex]}): «${q.options[q.correctIndex]}»`
          : `Resposta normativa: <strong>${q.answers ? q.answers[0] : ''}</strong>`;

        feedbackHtml = `
          <div class="feedback-banner wrong">
            <div class="feedback-icon">⚠️</div>
            <div class="feedback-content">
              <h4>Resposta incorrecta</h4>
              <p>${correctAnswersText}</p>
              ${q.explanation ? `<div class="feedback-explanation"><strong>Criteri oficial i regla:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
            </div>
          </div>
        `;
      }
    } else if (qState.showSolution) {
      const correctAnswersText = q.type === 'multiple_choice' 
        ? `L'opció correcta és la (${['a','b','c','d'][q.correctIndex]}): «${q.options[q.correctIndex]}»`
        : `Solució: <strong>${q.answers ? q.answers[0] : ''}</strong>`;

      feedbackHtml = `
        <div class="feedback-banner" style="background: var(--bg-card-alt); border: 1px solid var(--border-color); color: var(--text-main);">
          <div class="feedback-icon">👁️</div>
          <div class="feedback-content">
            <h4>Solució oficial de l'activitat</h4>
            <p>${correctAnswersText}</p>
            ${q.explanation ? `<div class="feedback-explanation"><strong>Explicació:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="question-card">
        <div class="question-badge-bar">
          <div class="badge-group">
            <span class="badge badge-exam">${examLabel}</span>
            <span class="badge badge-cat">${catObj.icon} ${catObj.name}</span>
          </div>
          <div class="q-index-info">Activitat ${state.currentQuestionIndex + 1} de ${list.length}</div>
        </div>

        <h3 class="q-title">${escapeHtml(q.title)}</h3>
        <p class="q-instruction">${escapeHtml(q.instruction)}</p>

        ${bodyHtml}
        ${hintHtml}
        ${feedbackHtml}

        <div class="question-footer">
          <div class="btn-group-left">
            ${q.hint ? `<button class="btn btn-secondary btn-sm" id="btn-show-hint">💡 Pista</button>` : ''}
            <button class="btn btn-secondary btn-sm" id="btn-show-solution">👁️ Solució</button>
            ${qState.answered ? `<button class="btn btn-secondary btn-sm" id="btn-retry-q">🔄 Tornar a provar</button>` : ''}
          </div>

          <div class="btn-group-right">
            ${state.currentQuestionIndex > 0 ? `<button class="btn btn-secondary" id="btn-prev-q">⬅️ Anterior</button>` : ''}
            
            ${!qState.answered ? `<button class="btn btn-primary" id="btn-check-q">Comprova resposta</button>` : ''}

            ${state.currentQuestionIndex < list.length - 1 ? `<button class="btn btn-primary" id="btn-next-q">Següent ➡️</button>` : ''}
          </div>
        </div>
      </div>
    `;

    // Assignació d'esdeveniments
    attachQuestionEvents(q, qState);
  }

  function attachQuestionEvents(q, qState) {
    // Si és tipus test, fer clic directament a una opció per comprovar
    if (q.type === 'multiple_choice') {
      const optButtons = document.querySelectorAll('.option-btn');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.getAttribute('data-option-index'), 10);
          handleAnswerSubmission(q, optIdx);
        });
      });
    }

    // Botó comprova resposta
    const checkBtn = document.getElementById('btn-check-q');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        let answerVal = getUserInputFromDOM(q);
        if (answerVal === '' || answerVal === null) {
          showToast("Si us plau, escriviu una resposta abans de comprovar.", "⚠️");
          return;
        }
        handleAnswerSubmission(q, answerVal);
      });
    }

    // Enfocar input i prémer Enter per comprovar
    const singleInput = document.getElementById(`fill-input-${q.id}`) || document.getElementById(`trans-input-${q.id}`);
    if (singleInput && !qState.answered) {
      singleInput.focus();
      singleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkBtn ? checkBtn.click() : handleAnswerSubmission(q, singleInput.value);
        }
      });
    }

    const input2 = document.getElementById(`trans-input-2-${q.id}`);
    if (input2 && !qState.answered) {
      input2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkBtn && checkBtn.click();
        }
      });
    }

    // Botó Pista
    const hintBtn = document.getElementById('btn-show-hint');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        playSound('click');
        state.userProgress.answers[q.id] = state.userProgress.answers[q.id] || {};
        state.userProgress.answers[q.id].showHint = true;
        saveProgress();
        renderCurrentQuestion();
      });
    }

    // Botó Solució
    const solBtn = document.getElementById('btn-show-solution');
    if (solBtn) {
      solBtn.addEventListener('click', () => {
        playSound('click');
        state.userProgress.answers[q.id] = state.userProgress.answers[q.id] || {};
        state.userProgress.answers[q.id].showSolution = true;
        saveProgress();
        renderCurrentQuestion();
      });
    }

    // Botó Tornar a provar
    const retryBtn = document.getElementById('btn-retry-q');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        playSound('click');
        if (state.userProgress.answers[q.id]) {
          state.userProgress.answers[q.id].answered = false;
        }
        saveProgress();
        updateGlobalStats();
        renderNavigatorGrid();
        renderCurrentQuestion();
      });
    }

    // Botó Anterior / Següent
    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        playSound('click');
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex--;
          renderNavigatorGrid();
          renderCurrentQuestion();
        }
      });
    }

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        playSound('click');
        if (state.currentQuestionIndex < state.filteredQuestions.length - 1) {
          state.currentQuestionIndex++;
          renderNavigatorGrid();
          renderCurrentQuestion();
        }
      });
    }
  }

  function getUserInputFromDOM(q) {
    if (q.type === 'fill_in') {
      const inp = document.getElementById(`fill-input-${q.id}`);
      return inp ? inp.value.trim() : '';
    } else if (q.type === 'sentence_transform') {
      const inp1 = document.getElementById(`trans-input-1-${q.id}`);
      const inp2 = document.getElementById(`trans-input-2-${q.id}`);
      if (inp1 && inp2) {
        return `${inp1.value.trim()}, ${inp2.value.trim()}`;
      }
      const single = document.getElementById(`trans-input-${q.id}`);
      return single ? single.value.trim() : '';
    }
    return '';
  }

  // --- Processament de la Resposta i Autocorrecció Immediata ---
  function handleAnswerSubmission(q, userAnswer) {
    const isCorrect = isAnswerCorrect(q, userAnswer);

    // Actualitzar estat de la resposta
    const currentProgress = state.userProgress.answers[q.id] || { attempts: 0 };
    currentProgress.answered = true;
    currentProgress.isCorrect = isCorrect;
    currentProgress.userAnswer = userAnswer;
    currentProgress.attempts = (currentProgress.attempts || 0) + 1;
    currentProgress.timestamp = Date.now();

    state.userProgress.answers[q.id] = currentProgress;

    // Actualitzar ratxa
    if (isCorrect) {
      state.userProgress.streak++;
      playSound('correct');
      if (state.userProgress.streak % 5 === 0) {
        showToast(`Increïble! Portes una ratxa de ${state.userProgress.streak} encerts seguits! 🔥`, '🎉');
      }
    } else {
      state.userProgress.streak = 0;
      playSound('wrong');
    }

    saveProgress();
    updateGlobalStats();
    renderNavigatorGrid();
    renderCurrentQuestion();
  }

  // --- Inicialització de la Barra de Categories ---
  function renderCategoryPills() {
    const container = document.getElementById('category-pills-container');
    if (!container) return;

    container.innerHTML = window.C1_DATA.categories.map(cat => `
      <button class="cat-pill ${cat.id === state.currentCategory ? 'active' : ''}" data-cat-id="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        playSound('click');
        state.currentCategory = pill.getAttribute('data-cat-id');
        highlightActiveCategoryPill();
        state.currentQuestionIndex = 0;
        filterQuestions();
      });
    });
  }

  function highlightActiveCategoryPill() {
    document.querySelectorAll('.cat-pill').forEach(pill => {
      if (pill.getAttribute('data-cat-id') === state.currentCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // SECCIÓ SIMULACRE D'EXAMEN
  // =========================================================================
  function initExamView() {
    const select = document.getElementById('exam-select');
    const startFinishBtn = document.getElementById('btn-start-or-finish-exam');

    if (select) {
      select.addEventListener('change', () => {
        state.exam.examId = select.value;
        if (!state.exam.active) {
          renderExamQuestionsList();
        }
      });
    }

    if (startFinishBtn) {
      startFinishBtn.addEventListener('click', () => {
        if (!state.exam.active) {
          startExam();
        } else {
          finishExam();
        }
      });
    }

    renderExamQuestionsList();
  }

  function startExam() {
    state.exam.active = true;
    state.exam.submitted = false;
    state.exam.answers = {};
    state.exam.timeRemaining = 65 * 60; // 65 minuts

    document.getElementById('btn-start-or-finish-exam').textContent = "Finalitza i Avalua l'Examen";
    document.getElementById('btn-start-or-finish-exam').classList.remove('btn-primary');
    document.getElementById('btn-start-or-finish-exam').classList.add('btn-accent');
    document.getElementById('exam-result-summary').style.display = 'none';

    renderExamQuestionsList();
    showToast("Examen començat! Teniu 65 minuts per completar el bloc.", "⏱️");

    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
    state.exam.timerInterval = setInterval(() => {
      state.exam.timeRemaining--;
      updateTimerDisplay();

      if (state.exam.timeRemaining <= 0) {
        clearInterval(state.exam.timerInterval);
        finishExam();
        showToast("S'ha esgotat el temps oficial de l'examen!", "⌛");
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerText = document.getElementById('timer-text');
    const timerBox = document.getElementById('exam-timer-display');
    if (!timerText) return;

    const m = Math.floor(state.exam.timeRemaining / 60);
    const s = state.exam.timeRemaining % 60;
    timerText.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    if (state.exam.timeRemaining < 300) { // Menys de 5 minuts
      timerBox.classList.add('timer-warning');
    } else {
      timerBox.classList.remove('timer-warning');
    }
  }

  function renderExamQuestionsList() {
    const container = document.getElementById('exam-questions-list');
    if (!container) return;

    const examQuestions = window.C1_DATA.activities.filter(q => q.exam === state.exam.examId);
    
    if (examQuestions.length === 0) {
      container.innerHTML = `<div class="empty-state"><h3>Cap pregunta per a aquest examen</h3></div>`;
      return;
    }

    container.innerHTML = examQuestions.map((q, idx) => {
      const qNum = idx + 1;
      let inputWidget = '';

      if (q.type === 'fill_in') {
        const userVal = state.exam.answers[q.id] || '';
        inputWidget = `
          <div class="context-box">
            ${q.contextText.replace('{{BLANK}}', `<input type="text" class="input-fill-blank exam-input" data-qid="${q.id}" value="${escapeHtml(userVal)}" placeholder="..." ${state.exam.submitted ? 'disabled' : ''} />`)}
          </div>
        `;
      } else if (q.type === 'sentence_transform') {
        let promptTpl = q.promptTemplate;
        if (promptTpl.includes('{{BLANK1}}')) {
          let v1 = '';
          let v2 = '';
          const saved = state.exam.answers[q.id] || '';
          const parts = saved.split(/[,/]+/);
          v1 = (parts[0] || '').trim();
          v2 = (parts[1] || '').trim();
          promptTpl = promptTpl
            .replace('{{BLANK1}}', `<input type="text" class="input-fill-blank exam-trans-1" data-qid="${q.id}" value="${escapeHtml(v1)}" placeholder="buit 1" ${state.exam.submitted ? 'disabled' : ''} />`)
            .replace('{{BLANK2}}', `<input type="text" class="input-fill-blank exam-trans-2" data-qid="${q.id}" value="${escapeHtml(v2)}" placeholder="buit 2" ${state.exam.submitted ? 'disabled' : ''} />`);
        } else {
          const userVal = state.exam.answers[q.id] || '';
          promptTpl = promptTpl.replace('{{BLANK}}', `<input type="text" class="input-fill-blank exam-input" data-qid="${q.id}" value="${escapeHtml(userVal)}" placeholder="escriviu..." ${state.exam.submitted ? 'disabled' : ''} />`);
        }
        inputWidget = `
          <div class="original-sentence-box">${escapeHtml(q.originalSentence)}</div>
          <div class="context-box">${promptTpl}</div>
        `;
      } else if (q.type === 'multiple_choice') {
        const savedChoice = state.exam.answers[q.id];
        inputWidget = `
          ${q.question ? `<p style="font-weight: 700; margin-bottom: 0.75rem;">${escapeHtml(q.question)}</p>` : ''}
          <div class="options-grid">
            ${q.options.map((opt, i) => {
              const isChecked = savedChoice === i;
              return `
                <button type="button" class="option-btn exam-opt-btn ${isChecked ? 'selected-correct' : ''}" data-qid="${q.id}" data-opt-idx="${i}" ${state.exam.submitted ? 'disabled' : ''}>
                  <span class="option-prefix">${['a','b','c','d'][i]}</span>
                  <span>${escapeHtml(opt)}</span>
                </button>
              `;
            }).join('')}
          </div>
        `;
      }

      // Si ja s'ha corregit, mostrar el resultat a sota de cada pregunta
      let evalBanner = '';
      if (state.exam.submitted) {
        const userAns = state.exam.answers[q.id];
        const isOk = isAnswerCorrect(q, userAns);
        evalBanner = isOk ? `
          <div class="feedback-banner correct" style="margin-top: 1rem; padding: 0.75rem 1rem;">
            <div><strong>✓ Correcte:</strong> ${q.explanation || ''}</div>
          </div>
        ` : `
          <div class="feedback-banner wrong" style="margin-top: 1rem; padding: 0.75rem 1rem;">
            <div><strong>✗ Incorrecte.</strong> Resposta normativa: <strong>${q.answers ? q.answers[0] : (q.options ? q.options[q.correctIndex] : '')}</strong>. ${q.explanation || ''}</div>
          </div>
        `;
      }

      return `
        <div class="question-card" style="margin-bottom: 1.5rem;">
          <div class="question-badge-bar">
            <span class="badge badge-cat">${q.category}</span>
            <span class="q-index-info">Exercici ${qNum}</span>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">${escapeHtml(q.title)}</h4>
          <p class="q-instruction">${escapeHtml(q.instruction)}</p>
          ${inputWidget}
          ${evalBanner}
        </div>
      `;
    }).join('');

    // Assignar canvis d'inputs en temps real
    container.querySelectorAll('.exam-input').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const qid = inp.getAttribute('data-qid');
        state.exam.answers[qid] = e.target.value;
      });
    });

    container.querySelectorAll('.exam-trans-1, .exam-trans-2').forEach(inp => {
      inp.addEventListener('input', () => {
        const qid = inp.getAttribute('data-qid');
        const c1 = container.querySelector(`.exam-trans-1[data-qid="${qid}"]`);
        const c2 = container.querySelector(`.exam-trans-2[data-qid="${qid}"]`);
        state.exam.answers[qid] = `${c1 ? c1.value.trim() : ''}, ${c2 ? c2.value.trim() : ''}`;
      });
    });

    container.querySelectorAll('.exam-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.exam.submitted) return;
        const qid = btn.getAttribute('data-qid');
        const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        state.exam.answers[qid] = idx;
        
        // Deseleccionar germans
        const siblings = container.querySelectorAll(`.exam-opt-btn[data-qid="${qid}"]`);
        siblings.forEach(s => s.classList.remove('selected-correct'));
        btn.classList.add('selected-correct');
      });
    });
  }

  function finishExam() {
    clearInterval(state.exam.timerInterval);
    state.exam.active = false;
    state.exam.submitted = true;

    document.getElementById('btn-start-or-finish-exam').textContent = "Reinicia l'Examen";
    document.getElementById('btn-start-or-finish-exam').classList.remove('btn-accent');
    document.getElementById('btn-start-or-finish-exam').classList.add('btn-primary');

    const examQuestions = window.C1_DATA.activities.filter(q => q.exam === state.exam.examId);
    let totalQuestions = examQuestions.length;
    let correctCount = 0;

    examQuestions.forEach(q => {
      const userAns = state.exam.answers[q.id];
      if (isAnswerCorrect(q, userAns)) {
        correctCount++;
      }
    });

    // Puntuació oficial sobre 20 punts (criteri C1 Govern d'Andorra)
    // El 70% per aprovar = 14 punts sobre 20.
    const scoreOver20 = Number(((correctCount / totalQuestions) * 20).toFixed(2));
    const isPassed = scoreOver20 >= 14.0;

    const summaryCard = document.getElementById('exam-result-summary');
    summaryCard.style.display = 'block';
    summaryCard.innerHTML = `
      <div class="score-summary-card">
        <div class="score-badge-circle ${isPassed ? 'passed' : 'failed'}">
          ${scoreOver20}
        </div>
        <h2>${isPassed ? 'APTE! Enhorabona! 🎉' : 'NO APTE (Cal repassar) 📚'}</h2>
        <p style="color: var(--text-muted); font-size: 1rem;">
          ${isPassed 
            ? 'Heu superat el llindar oficial del 70% requerit pel Govern d\'Andorra per al bloc de Lèxic, gramàtica i ortografia.' 
            : 'Per ser declarat apte cal una nota igual o superior a 14 punts sobre 20 (70%). Reviseu les correccions a sota!'}
        </p>

        <div class="score-details-grid">
          <div class="score-detail-item">
            <div class="num">${correctCount} / ${totalQuestions}</div>
            <div class="label">Encerts totals</div>
          </div>
          <div class="score-detail-item">
            <div class="num">${scoreOver20} / 20</div>
            <div class="label">Puntuació Oficial</div>
          </div>
          <div class="score-detail-item">
            <div class="num">${Math.round((correctCount / totalQuestions) * 100)}%</div>
            <div class="label">Percentatge d'encert</div>
          </div>
        </div>

        <button class="btn btn-primary" id="btn-scroll-review">Revisa les respostes una a una ↓</button>
      </div>
    `;

    const scrollBtn = document.getElementById('btn-scroll-review');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        document.getElementById('exam-questions-list').scrollIntoView({ behavior: 'smooth' });
      });
    }

    renderExamQuestionsList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // SECCIÓ REPASSAR ERRORS
  // =========================================================================
  function renderReviewView() {
    const container = document.getElementById('review-container');
    if (!container) return;

    const all = window.C1_DATA.activities;
    const failedQuestions = all.filter(q => {
      const qState = state.userProgress.answers[q.id];
      return qState && qState.answered && !qState.isCorrect;
    });

    if (failedQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🌟</div>
          <h3>Excel·lent! No teniu cap error pendent</h3>
          <p>Totes les activitats que heu respost fins ara han estat correctes o encara no n'heu fallat cap. Continueu practicant!</p>
          <button class="btn btn-primary" id="btn-back-to-practice">Ves a la pràctica lliure</button>
        </div>
      `;
      const backBtn = document.getElementById('btn-back-to-practice');
      if (backBtn) {
        backBtn.addEventListener('click', () => switchTab('practice'));
      }
      return;
    }

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <h3>Tenir pendents de repassar: ${failedQuestions.length} activitats</h3>
        <button class="btn btn-secondary btn-sm" id="btn-clear-all-errors">Neteja llista d'errors</button>
      </div>
      <div id="review-cards-list"></div>
    `;

    const listDiv = document.getElementById('review-cards-list');
    listDiv.innerHTML = failedQuestions.map((q, idx) => `
      <div class="question-card" style="margin-bottom: 1.5rem;">
        <div class="question-badge-bar">
          <span class="badge badge-exam">${q.exam === 'exam1' ? 'CAT-C1-39' : (q.exam === 'exam2' ? 'Nou Model C1' : 'Banc C1')}</span>
          <span class="badge badge-cat">${q.category}</span>
        </div>
        <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">${escapeHtml(q.title)}</h4>
        <p class="q-instruction">${escapeHtml(q.instruction)}</p>
        
        ${q.contextText ? `<div class="context-box">${q.contextText.replace('{{BLANK}}', '<strong>[ ... ]</strong>')}</div>` : ''}
        ${q.originalSentence ? `<div class="original-sentence-box">${escapeHtml(q.originalSentence)}</div>` : ''}
        ${q.question ? `<p style="font-weight: 700; margin-bottom: 0.75rem;">${escapeHtml(q.question)}</p>` : ''}

        <div class="feedback-banner wrong" style="margin-bottom: 1.25rem;">
          <div>
            <strong>Resposta correcta:</strong> ${q.type === 'multiple_choice' ? q.options[q.correctIndex] : q.answers[0]}
            ${q.explanation ? `<div class="feedback-explanation"><strong>Explicació:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
          </div>
        </div>

        <button class="btn btn-primary btn-sm btn-retry-single-error" data-qid="${q.id}">
          Practicar aquesta pregunta ara 🎯
        </button>
      </div>
    `).join('');

    listDiv.querySelectorAll('.btn-retry-single-error').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        const targetIdx = state.filteredQuestions.findIndex(q => q.id === qid);
        if (targetIdx !== -1) {
          state.currentQuestionIndex = targetIdx;
        } else {
          state.currentCategory = 'all';
          state.searchQuery = '';
          filterQuestions();
          state.currentQuestionIndex = state.filteredQuestions.findIndex(q => q.id === qid);
        }
        switchTab('practice');
        renderCurrentQuestion();
        renderNavigatorGrid();
      });
    });

    const clearBtn = document.getElementById('btn-clear-all-errors');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Voleu restablir les respostes errades?")) {
          failedQuestions.forEach(q => {
            delete state.userProgress.answers[q.id];
          });
          saveProgress();
          updateGlobalStats();
          renderReviewView();
          showToast("S'ha netejat la llista d'errors.", "🧹");
        }
      });
    }
  }

  // =========================================================================
  // SECCIÓ COMPRENSIÓ LECTORA
  // =========================================================================
  function renderReadingView() {
    const textArticle = document.getElementById('reading-text-article');
    const questionsContainer = document.getElementById('reading-questions-container');
    if (!textArticle || !questionsContainer) return;

    const data = window.C1_DATA.texts.sucre_fruita;
    textArticle.innerHTML = `
      <h2>${escapeHtml(data.title)}</h2>
      <div class="reading-meta">Autor: ${escapeHtml(data.author)} · Text oficial de la prova C1</div>
      <div class="reading-content">
        ${data.content.split('\n\n').map(p => {
          if (p.startsWith('El sucre') || p.startsWith('I la fructosa') || p.startsWith('Per què') || p.startsWith('La fruita provoca') || p.startsWith('Fruita a la nit') || p.startsWith('És millor') || p.startsWith('Quan cal evitar')) {
            return `<h4>${escapeHtml(p)}</h4>`;
          }
          return `<p>${escapeHtml(p)}</p>`;
        }).join('')}
      </div>
    `;

    // Carregar les preguntes de comprensió lectora
    const compQuestions = window.C1_DATA.activities.filter(q => q.category === 'comprensio');
    questionsContainer.innerHTML = compQuestions.map((q, idx) => {
      const qState = state.userProgress.answers[q.id] || {};
      return `
        <div class="question-card" style="margin-bottom: 1.5rem;">
          <div class="question-badge-bar">
            <span class="badge badge-exam">Comprensió Lectora</span>
            <span class="q-index-info">Pregunta ${idx + 1} de ${compQuestions.length}</span>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">${escapeHtml(q.question)}</h4>
          <div class="options-grid">
            ${q.options.map((opt, i) => {
              let cl = '';
              if (qState.answered) {
                if (qState.userAnswer === i) {
                  cl = qState.isCorrect ? 'selected-correct' : 'selected-wrong';
                } else if (i === q.correctIndex) {
                  cl = 'reveal-correct';
                }
              }
              return `
                <button class="option-btn comp-opt-btn ${cl}" data-qid="${q.id}" data-opt-idx="${i}">
                  <span class="option-prefix">${['a','b','c','d'][i]}</span>
                  <span>${escapeHtml(opt)}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${qState.answered ? `
            <div class="feedback-banner ${qState.isCorrect ? 'correct' : 'wrong'}">
              <div><strong>${qState.isCorrect ? '✓ Resposta encertada!' : '✗ Incorrecte.'}</strong> ${q.explanation}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    questionsContainer.querySelectorAll('.comp-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const q = compQuestions.find(item => item.id === qid);
        if (q) {
          handleAnswerSubmission(q, optIdx);
          renderReadingView();
        }
      });
    });
  }

  // =========================================================================
  // SECCIÓ DICCIONARI DE FRASES FETES
  // =========================================================================
  function renderDictionaryView() {
    const grid = document.getElementById('dict-cards-grid');
    const searchInput = document.getElementById('dict-search-input');
    if (!grid) return;

    function doRender(query = '') {
      const q = query.trim().toLowerCase();
      const items = window.C1_DATA.idiomDictionary.filter(item => {
        return item.expr.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q);
      });

      if (items.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><h3>Cap frase feta trobada per a «${escapeHtml(query)}»</h3></div>`;
        return;
      }

      grid.innerHTML = items.map(item => `
        <div class="dict-card">
          <div class="dict-expr">«${escapeHtml(item.expr)}»</div>
          <div class="dict-meaning">${escapeHtml(item.meaning)}</div>
        </div>
      `).join('');
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        doRender(e.target.value);
      });
    }

    doRender();
  }

  // =========================================================================
  // SECCIÓ EXPRESSIÓ ESCRITA (55 PUNTS)
  // =========================================================================
  let activeWritingTaskId = "write_task_1_exam1";

  function renderWritingView() {
    const selector = document.getElementById('writing-task-selector');
    const container = document.getElementById('writing-active-task-container');
    if (!selector || !container) return;

    const tasks = window.C1_DATA.writingTasks;
    if (!tasks || tasks.length === 0) return;

    // Generar botons de tasques
    selector.innerHTML = tasks.map(t => `
      <button class="cat-pill ${t.id === activeWritingTaskId ? 'active' : ''} write-task-pill" data-taskid="${t.id}">
        <span>${t.block.includes('1') ? '📝' : '📄'}</span>
        <span>${escapeHtml(t.title)}</span>
      </button>
    `).join('');

    selector.querySelectorAll('.write-task-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        playSound('click');
        activeWritingTaskId = pill.getAttribute('data-taskid');
        renderWritingView();
      });
    });

    const activeTask = tasks.find(t => t.id === activeWritingTaskId) || tasks[0];
    const savedDraft = localStorage.getItem(`c1_draft_${activeTask.id}`) || '';

    container.innerHTML = `
      <div class="question-card" style="margin-bottom: 2rem;">
        <div class="question-badge-bar">
          <div class="badge-group">
            <span class="badge badge-exam">${activeTask.block}</span>
            <span class="badge badge-cat">${activeTask.exam === 'exam1' ? 'Examen CAT-C1-39' : 'Nou Model C1'}</span>
          </div>
          <span class="q-index-info">Objectiu: ~${activeTask.targetWords} paraules (${activeTask.minWords} - ${activeTask.maxWords})</span>
        </div>

        <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem;">${escapeHtml(activeTask.title)}</h3>
        
        <div class="context-box" style="font-size: 0.96rem; line-height: 1.6; margin-bottom: 1.25rem;">
          <p style="margin-bottom: 0.5rem;"><strong>Situació de comunicació:</strong> ${escapeHtml(activeTask.role)}</p>
          <p><strong>Enunciat oficial:</strong> ${escapeHtml(activeTask.instruction)}</p>
        </div>

        <div style="background: var(--bg-card-alt); border-left: 4px solid var(--accent); padding: 1rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--accent);">📌 Pautes oficials obligatòries per desenvolupar:</h4>
          <ul style="padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6;">
            ${activeTask.guidelines.map(g => `<li>${escapeHtml(g)}</li>`).join('')}
          </ul>
        </div>

        <!-- Editor de redacció -->
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <label for="writing-textarea" style="font-weight: 700; font-size: 0.95rem;">La vostra redacció:</label>
            <div id="word-counter-badge" class="stat-chip">
              <span id="word-count-num">0</span> paraules (objectiu ~${activeTask.targetWords})
            </div>
          </div>
          
          <textarea id="writing-textarea" rows="12" style="width: 100%; padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); background: var(--bg-card); color: var(--text-main); font-family: inherit; font-size: 1.02rem; line-height: 1.7; outline: none; transition: border-color 0.2s ease; resize: vertical;" placeholder="Comenceu a escriure aquí la vostra composició escrita de nivell C1...">${escapeHtml(savedDraft)}</textarea>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" id="btn-save-draft">💾 Desa esborrany</button>
            <button class="btn btn-secondary btn-sm" id="btn-clear-draft">🗑️ Neteja</button>
          </div>
          <button class="btn btn-primary" id="btn-toggle-model">📖 Mostra Redacció Model C1 (Puntuació Màxima)</button>
        </div>

        <!-- Redacció Model desplegable -->
        <div id="sample-model-box" style="display: none; margin-top: 1.5rem; background: var(--success-bg); border: 1.5px solid var(--success-border); border-radius: var(--radius-md); padding: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #065f46;">✨ Exemple de Redacció de Nivell C1 Excel·lent</h4>
            <span class="badge" style="background: var(--success); color: white;">Avaluat: 10/10</span>
          </div>
          <div style="font-size: 0.98rem; line-height: 1.8; color: var(--text-main); white-space: pre-line; background: var(--bg-card); padding: 1.25rem 1.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            ${escapeHtml(activeTask.sampleModel)}
          </div>
          <p style="font-size: 0.82rem; color: #065f46; margin-top: 0.75rem;">
            💡 <em>Observeu l'estructura en paràgrafs clars (introducció, desenvolupament i conclusió), la riquesa de connectors (tanmateix, tot i que, indubtablement, per tal de), i l'ús de vocabulari culte i precís.</em>
          </p>
        </div>
      </div>
    `;

    const textarea = document.getElementById('writing-textarea');
    const wordBadge = document.getElementById('word-counter-badge');
    const wordNum = document.getElementById('word-count-num');

    function updateWordCount() {
      if (!textarea) return;
      const text = textarea.value.trim();
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      wordNum.textContent = words;

      if (words >= activeTask.minWords && words <= activeTask.maxWords) {
        wordBadge.className = 'stat-chip success-chip';
        wordBadge.title = "Extensió òptima!";
      } else if (words < activeTask.minWords) {
        wordBadge.className = 'stat-chip';
        wordBadge.title = `Falten ${activeTask.minWords - words} paraules com a mínim`;
      } else {
        wordBadge.className = 'stat-chip danger-chip';
        wordBadge.title = `Heu superat el màxim per ${words - activeTask.maxWords} paraules`;
      }

      // Auto-save a localStorage
      localStorage.setItem(`c1_draft_${activeTask.id}`, textarea.value);
    }

    if (textarea) {
      textarea.addEventListener('input', updateWordCount);
      updateWordCount();
    }

    const saveBtn = document.getElementById('btn-save-draft');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        playSound('click');
        localStorage.setItem(`c1_draft_${activeTask.id}`, textarea ? textarea.value : '');
        showToast("Esborrany desat correctament al navegador!", "💾");
      });
    }

    const clearBtn = document.getElementById('btn-clear-draft');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Segur que voleu esborrar el text escrit?")) {
          textarea.value = '';
          updateWordCount();
          localStorage.removeItem(`c1_draft_${activeTask.id}`);
          showToast("S'ha netejat l'esborrany.", "🧹");
        }
      });
    }

    const toggleModelBtn = document.getElementById('btn-toggle-model');
    const modelBox = document.getElementById('sample-model-box');
    if (toggleModelBtn && modelBox) {
      toggleModelBtn.addEventListener('click', () => {
        playSound('click');
        const isHidden = modelBox.style.display === 'none';
        modelBox.style.display = isHidden ? 'block' : 'none';
        toggleModelBtn.textContent = isHidden ? '🙈 Amaga Redacció Model C1' : '📖 Mostra Redacció Model C1 (Puntuació Màxima)';
      });
    }
  }

  // =========================================================================
  // SECCIÓ CREACIÓ DE FRASES (EXERCICI 7)
  // =========================================================================
  function renderSentencesView() {
    const container = document.getElementById('sentences-grid-container');
    if (!container) return;

    const items = window.C1_DATA.sentenceCreationExercises || [];
    if (items.length === 0) return;

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <p style="font-size: 0.95rem; color: var(--text-muted);">
          A l'examen oficial, se us demana escriure una frase completa per a cadascun dels elements següents. Practiqueu redactant una oració que compleixi estrictament la normativa i després compareu-la amb el model proposat.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${items.map((it, idx) => `
          <div class="question-card" style="margin-bottom: 0;">
            <div class="question-badge-bar">
              <div class="badge-group">
                <span class="badge badge-exam">${it.exam === 'exam1' ? 'Examen CAT-C1-39' : 'Nou Model C1'}</span>
                <span class="badge badge-cat">${it.category}</span>
              </div>
              <span class="q-index-info">Element ${idx + 1} de ${items.length}</span>
            </div>

            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary); margin-bottom: 0.4rem;">
              «${escapeHtml(it.element)}»
            </h3>

            <div class="q-instruction" style="margin-bottom: 1rem;">
              <strong>Regla d'ús C1:</strong> ${escapeHtml(it.rule)}
            </div>

            <div style="margin-bottom: 1rem;">
              <input type="text" id="sentence-input-${it.id}" class="search-input" style="border-radius: var(--radius-sm); font-size: 1rem; padding: 0.75rem 1rem;" placeholder="Escriviu aquí la vostra frase completa amb «${escapeHtml(it.element)}»...">
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
              <button class="btn btn-primary btn-sm btn-check-sentence" data-id="${it.id}" data-element="${escapeHtml(it.element)}">
                Comprova la meva frase
              </button>
              <button class="btn btn-secondary btn-sm btn-show-sentence-model" data-id="${it.id}">
                👁️ Mostra frase model C1
              </button>
            </div>

            <!-- Feedback de comprovació -->
            <div id="sentence-feedback-${it.id}" style="display: none; margin-top: 1rem;"></div>

            <!-- Exemple model desplegable -->
            <div id="sentence-model-${it.id}" style="display: none; margin-top: 1rem; background: var(--bg-card-alt); border-left: 4px solid var(--success); padding: 1rem 1.25rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
              <div style="font-weight: 700; color: var(--success); margin-bottom: 0.25rem;">Frase d'exemple normativa de nivell C1:</div>
              <p style="font-size: 1rem; font-style: italic; margin-bottom: 0.4rem;">«${escapeHtml(it.goodExample)}»</p>
              ${it.wrongNote ? `<div style="font-size: 0.85rem; color: var(--danger);">⚠️ <strong>Atenció:</strong> ${escapeHtml(it.wrongNote)}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.btn-check-sentence').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        const id = btn.getAttribute('data-id');
        const targetElement = btn.getAttribute('data-element').toLowerCase().trim();
        const input = document.getElementById(`sentence-input-${id}`);
        const feedback = document.getElementById(`sentence-feedback-${id}`);
        if (!input || !feedback) return;

        const val = input.value.trim();
        if (!val) {
          showToast("Escriviu una frase abans de comprovar.", "⚠️");
          return;
        }

        const words = val.split(/\s+/).filter(Boolean);
        const containsElement = val.toLowerCase().includes(targetElement);

        feedback.style.display = 'block';
        if (!containsElement) {
          playSound('wrong');
          feedback.className = 'feedback-banner wrong';
          feedback.innerHTML = `<div>⚠️ La frase no conté l'element requerit <strong>«${targetElement}»</strong>. Assegureu-vos d'incloure'l exactament.</div>`;
        } else if (words.length < 5) {
          playSound('wrong');
          feedback.className = 'feedback-banner wrong';
          feedback.innerHTML = `<div>⚠️ Cal elaborar una <strong>frase completa</strong> amb sentit i context suficient (mínim 5 o 6 paraules).</div>`;
        } else {
          playSound('correct');
          feedback.className = 'feedback-banner correct';
          feedback.innerHTML = `<div>🎉 <strong>Molt bona frase!</strong> Conté l'element «${targetElement}» i té una estructura adequada. Reviseu també el model de referència a continuació.</div>`;
          const modelBox = document.getElementById(`sentence-model-${id}`);
          if (modelBox) modelBox.style.display = 'block';
        }
      });
    });

    container.querySelectorAll('.btn-show-sentence-model').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        const id = btn.getAttribute('data-id');
        const modelBox = document.getElementById(`sentence-model-${id}`);
        if (modelBox) {
          const isHidden = modelBox.style.display === 'none';
          modelBox.style.display = isHidden ? 'block' : 'none';
          btn.textContent = isHidden ? '🙈 Amaga frase model' : '👁️ Mostra frase model C1';
        }
      });
    });
  }

  // =========================================================================
  // SECCIÓ GUIA DE LA PROVA ORAL (25 PUNTS)
  // =========================================================================
  function renderOralGuideView() {
    const container = document.getElementById('oral-guide-container');
    if (!container) return;

    const data = window.C1_DATA.oralGuide;
    if (!data) return;

    container.innerHTML = `
      <div class="score-summary-card" style="margin-bottom: 2rem; max-width: 100%; text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary);">Estructura i Criteris Oficials de la Prova Oral C1</h3>
          <span class="badge" style="background: var(--primary); color: white; font-size: 0.9rem; padding: 0.4rem 0.8rem;">
            Aptitud: 70% (≥ 17,5 / 25 punts)
          </span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          Durada total: <strong>${escapeHtml(data.duration)}</strong>. La part oral s'avalua de manera independent de l'escrita: cal superar-la obligatòriament amb almenys 17,5 punts per obtenir el títol de C1.
        </p>

        <!-- Blocs de la prova oral -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          ${data.blocks.map(b => `
            <div style="background: var(--bg-card-alt); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
              <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--primary); margin-bottom: 0.5rem;">${escapeHtml(b.title)}</h4>
              <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1rem;">${escapeHtml(b.description)}</p>
              <ul style="padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6; display: flex; flex-direction: column; gap: 0.4rem;">
                ${b.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Criteris de qualificació -->
        <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">🎯 Què avalua el tribunal? (Rúbrica oficial)</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          ${data.rubricCriteria.map(rc => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-top: 4px solid var(--primary); border-radius: var(--radius-sm); padding: 1rem;">
              <strong style="font-size: 0.95rem; color: var(--text-main); display: block; margin-bottom: 0.25rem;">${escapeHtml(rc.name)}</strong>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${escapeHtml(rc.desc)}</p>
            </div>
          `).join('')}
        </div>

        <!-- Errors típics a evitar -->
        <div style="background: var(--danger-bg); border: 1.5px solid var(--danger-border); border-radius: var(--radius-md); padding: 1.5rem;">
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--danger); margin-bottom: 0.75rem;">
            🚫 Errors greus més freqüents que penalitzen a la prova oral:
          </h4>
          <ul style="padding-left: 1.2rem; font-size: 0.92rem; line-height: 1.7; color: var(--text-main); display: flex; flex-direction: column; gap: 0.5rem;">
            ${data.typicalMistakesToAvoid.map(err => `<li>${escapeHtml(err)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // GESTIÓ DE PESTANYES I INTERFÍCIE
  // =========================================================================
  function switchTab(tabId) {
    state.currentTab = tabId;
    
    // Botons de navegació
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Panells de vista
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = 'none';
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${tabId}`);
    if (targetPanel) {
      targetPanel.style.display = 'block';
      targetPanel.classList.add('active');
    }

    if (tabId === 'practice') {
      filterQuestions();
    } else if (tabId === 'exam') {
      initExamView();
    } else if (tabId === 'review') {
      renderReviewView();
    } else if (tabId === 'reading') {
      renderReadingView();
    } else if (tabId === 'writing') {
      renderWritingView();
    } else if (tabId === 'sentences') {
      renderSentencesView();
    } else if (tabId === 'oral') {
      renderOralGuideView();
    } else if (tabId === 'dictionary') {
      renderDictionaryView();
    }
  }

  function updateSoundButtonIcon() {
    const btn = document.getElementById('btn-toggle-sound');
    if (btn) {
      btn.textContent = state.userProgress.soundEnabled ? '🔊' : '🔇';
    }
  }

  function updateThemeButtonIcon() {
    const btn = document.getElementById('btn-toggle-theme');
    if (btn) {
      btn.textContent = state.userProgress.theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Inicialització a la càrrega del DOM ---
  document.addEventListener('DOMContentLoaded', () => {
    loadPersistedData();
    renderCategoryPills();
    filterQuestions();
    updateGlobalStats();

    // Pestanyes principals
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Cerca de pràctica
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        filterQuestions();
      });
    }

    // Botó del logo
    const brandHome = document.getElementById('btn-brand-home');
    if (brandHome) {
      brandHome.addEventListener('click', () => {
        state.currentCategory = 'all';
        highlightActiveCategoryPill();
        switchTab('practice');
      });
    }

    // Botons d'accés ràpid als dos exàmens des del banner
    const quickExam1 = document.getElementById('btn-quick-exam1');
    if (quickExam1) {
      quickExam1.addEventListener('click', () => {
        playSound('click');
        state.currentCategory = 'exam1';
        highlightActiveCategoryPill();
        switchTab('practice');
      });
    }

    const quickExam2 = document.getElementById('btn-quick-exam2');
    if (quickExam2) {
      quickExam2.addEventListener('click', () => {
        playSound('click');
        state.currentCategory = 'exam2';
        highlightActiveCategoryPill();
        switchTab('practice');
      });
    }

    // Toggle de so
    const soundBtn = document.getElementById('btn-toggle-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        state.userProgress.soundEnabled = !state.userProgress.soundEnabled;
        updateSoundButtonIcon();
        saveProgress();
        showToast(state.userProgress.soundEnabled ? "So activat" : "So silenciat", state.userProgress.soundEnabled ? "🔊" : "🔇");
      });
    }

    // Toggle de tema
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = state.userProgress.theme === 'dark';
        state.userProgress.theme = isDark ? 'light' : 'dark';
        if (state.userProgress.theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
        updateThemeButtonIcon();
        saveProgress();
      });
    }

    // Botó de reinici d'estadístiques
    const resetBtn = document.getElementById('btn-reset-stats');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("Voleu reiniciar totes les respostes i estadístiques desades?")) {
          state.userProgress.answers = {};
          state.userProgress.streak = 0;
          saveProgress();
          updateGlobalStats();
          filterQuestions();
          showToast("S'han reiniciat totes les estadístiques.", "🔄");
        }
      });
    }
  });

})();
