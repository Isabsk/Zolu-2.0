"use client"

import React, { useEffect, useRef, useState } from 'react';

const FlappyPinkBird = () => {
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    bird: { x: 80, y: 300, velocity: 0 },
    pipes: [],
    score: 0,
    highScore: 0,
    frame: 0,
    gameOver: false,
    started: false,
    logoIndex: 0,
    currentFactIndex: 0,
    isPaused: false
  });

  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState('');
  const [countdown, setCountdown] = useState(3);

  const GAME_CONFIG = {
    BIRD: { RADIUS: 15, GRAVITY: 0.5, LIFT: -10, X_POSITION: 80 },
    PIPE: { WIDTH: 50, GAP: 150, SPEED: 3, SPAWN_RATE: 90 },
    COLORS: {
      BIRD: '#FF69B4',
      PIPE: '#C2185B',
      PIPE_GLOW: '#FF1493',
      SCORE: '#FFFFFF',
      GAME_OVER: '#FF4500'
    }
  };

  const PINK_FACTS = [
    "Pink is the most calming color and is often used in prisons to reduce aggressive behavior!",
    "Pink was originally considered a masculine color! Until the 1940s, pink was for boys and blue was for girls.",
    "The color pink doesn't exist in the visible light spectrum - it's created by our brain mixing red and white light!",
    "Flamingos are pink because of the shrimp and algae they eat, which contain natural pink pigments called carotenoids.",
    "In Japan, pink cherry blossoms (sakura) symbolize the fleeting nature of life and are celebrated nationally every spring.",
    "Marie Antoinette popularized pink in fashion during the 18th century, making it a symbol of luxury and femininity.",
    "Studies show that pink can suppress anger and anxiety, which is why it's called 'drunk tank pink' in some facilities.",
    "Pink houses are considered good luck in many cultures, especially in India where they represent hospitality.",
    "The phrase 'in the pink' means to be in perfect health, originating from the pink color of healthy skin.",
    "Pink roses symbolize gratitude, appreciation, and admiration - they're perfect for saying 'thank you'!",
    "Pink lipstick became popular during WWII as a symbol of femininity and morale boosting for women.",
    "Pink dolphins exist! The Amazon river dolphin can appear pink due to blood vessels close to their skin.",
    "Pink is associated with unconditional love and nurturing, making it popular in children's rooms and nurseries.",
    "Pink sand beaches exist naturally! They get their color from tiny red organisms mixed with white coral.",
    "Pink foods like salmon, watermelon, and strawberries are packed with antioxidants that promote healthy skin!"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Load high score
    const stored = localStorage.getItem('flappyHighScore');
    if (stored) {
      gameStateRef.current.highScore = parseInt(stored);
    }

    const drawNykaaLogo = (x, y, radius) => {
      const scale = radius / 15;
      ctx.shadowColor = 'rgba(255, 20, 147, 0.8)';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#E91E63';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${8 * scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('NYKAA', x, y);
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.9, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawLyftLogo = (x, y, radius) => {
      const scale = radius / 15;
      ctx.shadowColor = 'rgba(255, 20, 147, 0.8)';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#E91E63';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${10 * scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('lyft', x, y);
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x - radius * 0.8, y - radius * 0.4, radius * 1.6, radius * 0.8, 5);
      ctx.stroke();
    };

    const drawTMobileLogo = (x, y, radius) => {
      ctx.shadowColor = 'rgba(255, 20, 147, 0.8)';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#E91E63';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#FFFFFF';
      const tSize = radius * 0.8;
      const tThickness = tSize * 0.2;
      ctx.fillRect(x - tSize/2, y - tSize/2, tSize, tThickness);
      ctx.fillRect(x - tThickness/2, y - tSize/2, tThickness, tSize);
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.95, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawBird = () => {
      const { x, y } = gameStateRef.current.bird;
      const radius = GAME_CONFIG.BIRD.RADIUS;
      ctx.save();
      switch(gameStateRef.current.logoIndex) {
        case 0: drawNykaaLogo(x, y, radius); break;
        case 1: drawLyftLogo(x, y, radius); break;
        case 2: drawTMobileLogo(x, y, radius); break;
      }
      ctx.restore();
    };

    const drawPipes = () => {
      gameStateRef.current.pipes.forEach(pipe => {
        ctx.shadowColor = GAME_CONFIG.COLORS.PIPE_GLOW;
        ctx.shadowBlur = 20;
        const gradient = ctx.createLinearGradient(pipe.x, 0, pipe.x + GAME_CONFIG.PIPE.WIDTH, 0);
        gradient.addColorStop(0, '#AD1457');
        gradient.addColorStop(0.5, GAME_CONFIG.COLORS.PIPE);
        gradient.addColorStop(1, '#880E4F');
        ctx.fillStyle = gradient;
        ctx.fillRect(pipe.x, 0, GAME_CONFIG.PIPE.WIDTH, pipe.top);
        ctx.fillRect(pipe.x, canvas.height - pipe.bottom, GAME_CONFIG.PIPE.WIDTH, pipe.bottom);
        ctx.shadowBlur = 15;
        ctx.strokeStyle = GAME_CONFIG.COLORS.PIPE_GLOW;
        ctx.lineWidth = 3;
        ctx.strokeRect(pipe.x, 0, GAME_CONFIG.PIPE.WIDTH, pipe.top);
        ctx.strokeRect(pipe.x, canvas.height - pipe.bottom, GAME_CONFIG.PIPE.WIDTH, pipe.bottom);
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#880E4F';
        ctx.fillRect(pipe.x - 3, pipe.top - 20, GAME_CONFIG.PIPE.WIDTH + 6, 20);
        ctx.fillRect(pipe.x - 3, canvas.height - pipe.bottom, GAME_CONFIG.PIPE.WIDTH + 6, 20);
        ctx.strokeRect(pipe.x - 3, pipe.top - 20, GAME_CONFIG.PIPE.WIDTH + 6, 20);
        ctx.strokeRect(pipe.x - 3, canvas.height - pipe.bottom, GAME_CONFIG.PIPE.WIDTH + 6, 20);
      });
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    };

    const drawUI = () => {
      const gs = gameStateRef.current;
      ctx.shadowColor = 'rgba(255, 20, 147, 0.9)';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 15;
      ctx.fillStyle = GAME_CONFIG.COLORS.SCORE;
      ctx.strokeStyle = '#FF1493';
      ctx.lineWidth = 2;
      ctx.font = 'bold 24px Courier New';
      ctx.strokeText(`Score: ${gs.score}`, 15, 35);
      ctx.fillText(`Score: ${gs.score}`, 15, 35);
      ctx.shadowColor = 'rgba(255, 105, 180, 0.9)';
      ctx.shadowBlur = 10;
      ctx.font = 'bold 16px Courier New';
      ctx.strokeText(`Best: ${gs.highScore}`, 15, 60);
      ctx.fillText(`Best: ${gs.highScore}`, 15, 60);
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      if (!gs.started && !gs.gameOver) {
        const overlayGradient = ctx.createRadialGradient(
          canvas.width/2, canvas.height/2, 0,
          canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2
        );
        overlayGradient.addColorStop(0, 'rgba(255, 20, 147, 0.8)');
        overlayGradient.addColorStop(0.5, 'rgba(255, 105, 180, 0.7)');
        overlayGradient.addColorStop(1, 'rgba(255, 182, 193, 0.6)');
        ctx.fillStyle = overlayGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = 'rgba(255, 20, 147, 1)';
        ctx.shadowBlur = 25;
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#FF1493';
        ctx.lineWidth = 3;
        ctx.font = 'bold 32px Courier New';
        ctx.textAlign = 'center';
        ctx.strokeText('FLAPPY PINK BIRD', canvas.width/2, canvas.height/2 - 50);
        ctx.fillText('FLAPPY PINK BIRD', canvas.width/2, canvas.height/2 - 50);
        ctx.shadowBlur = 15;
        ctx.lineWidth = 2;
        ctx.font = '18px Courier New';
        ctx.strokeText('Click or Press SPACE to Start', canvas.width/2, canvas.height/2 + 20);
        ctx.fillText('Click or Press SPACE to Start', canvas.width/2, canvas.height/2 + 20);
        ctx.font = '14px Courier New';
        ctx.shadowColor = 'rgba(255, 105, 180, 1)';
        ctx.shadowBlur = 10;
        ctx.strokeText('Pink facts appear after each pipe!', canvas.width/2, canvas.height/2 + 45);
        ctx.fillText('Pink facts appear after each pipe!', canvas.width/2, canvas.height/2 + 45);
        ctx.textAlign = 'left';
      }

      if (gs.gameOver) {
        const pulseAlpha = 0.8 + 0.2 * Math.sin(gs.frame * 0.15);
        const overlayGradient = ctx.createRadialGradient(
          canvas.width/2, canvas.height/2, 0,
          canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2
        );
        overlayGradient.addColorStop(0, `rgba(255, 20, 147, ${pulseAlpha})`);
        overlayGradient.addColorStop(1, `rgba(159, 18, 57, ${pulseAlpha * 0.6})`);
        ctx.fillStyle = overlayGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = 'rgba(255, 20, 147, 1)';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#FF1493';
        ctx.lineWidth = 4;
        ctx.font = 'bold 40px Courier New';
        ctx.textAlign = 'center';
        const bounce = 5 * Math.sin(gs.frame * 0.2);
        ctx.strokeText('GAME OVER', canvas.width/2, canvas.height/2 - 30 + bounce);
        ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2 - 30 + bounce);
        ctx.shadowBlur = 15;
        ctx.lineWidth = 2;
        ctx.font = '18px Courier New';
        ctx.strokeText(`Final Score: ${gs.score}`, canvas.width/2, canvas.height/2 + 10);
        ctx.fillText(`Final Score: ${gs.score}`, canvas.width/2, canvas.height/2 + 10);
        ctx.strokeText('Click or Press SPACE to Restart', canvas.width/2, canvas.height/2 + 40);
        ctx.fillText('Click or Press SPACE to Restart', canvas.width/2, canvas.height/2 + 40);
        ctx.textAlign = 'left';
      }
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    };

    const updateBird = () => {
      const gs = gameStateRef.current;
      if (!gs.started || gs.isPaused) return;
      gs.bird.velocity += GAME_CONFIG.BIRD.GRAVITY;
      gs.bird.velocity = Math.min(gs.bird.velocity, 12);
      gs.bird.y += gs.bird.velocity;
      if (gs.bird.y + GAME_CONFIG.BIRD.RADIUS >= canvas.height || 
          gs.bird.y - GAME_CONFIG.BIRD.RADIUS <= 0) {
        endGame();
      }
    };

    const showFactOverlay = () => {
      const gs = gameStateRef.current;
      gs.currentFactIndex = (gs.currentFactIndex + 1) % PINK_FACTS.length;
      setCurrentFact(PINK_FACTS[gs.currentFactIndex]);
      setShowFact(true);
      setCountdown(3);
      
      let count = 3;
      const interval = setInterval(() => {
        count--;
        if (count > 0) {
          setCountdown(count);
        } else {
          clearInterval(interval);
          setShowFact(false);
          gs.isPaused = false;
        }
      }, 1000);
    };

    const updatePipes = () => {
      const gs = gameStateRef.current;
      if (!gs.started || gs.isPaused) return;
      
      if (gs.frame % GAME_CONFIG.PIPE.SPAWN_RATE === 0) {
        const minTop = 50;
        const maxTop = canvas.height - GAME_CONFIG.PIPE.GAP - 50;
        const topHeight = Math.random() * (maxTop - minTop) + minTop;
        gs.pipes.push({
          x: canvas.width,
          top: topHeight,
          bottom: canvas.height - topHeight - GAME_CONFIG.PIPE.GAP,
          scored: false
        });
      }
      
      const bird = gs.bird;
      const birdRadius = GAME_CONFIG.BIRD.RADIUS;
      
      for (let i = gs.pipes.length - 1; i >= 0; i--) {
        const pipe = gs.pipes[i];
        pipe.x -= GAME_CONFIG.PIPE.SPEED;
        
        if (bird.x + birdRadius > pipe.x && 
            bird.x - birdRadius < pipe.x + GAME_CONFIG.PIPE.WIDTH) {
          if (bird.y - birdRadius < pipe.top || 
              bird.y + birdRadius > canvas.height - pipe.bottom) {
            endGame();
            return;
          }
        }
        
        if (!pipe.scored && pipe.x + GAME_CONFIG.PIPE.WIDTH < bird.x) {
          gs.score++;
          pipe.scored = true;
          gs.isPaused = true;
          showFactOverlay();
        }
        
        if (pipe.x + GAME_CONFIG.PIPE.WIDTH < 0) {
          gs.pipes.splice(i, 1);
        }
      }
    };

    const endGame = () => {
      const gs = gameStateRef.current;
      gs.gameOver = true;
      gs.logoIndex = (gs.logoIndex + 1) % 3;
      if (gs.score > gs.highScore) {
        gs.highScore = gs.score;
        localStorage.setItem('flappyHighScore', gs.highScore.toString());
      }
    };

    const initGame = () => {
      gameStateRef.current = {
        bird: { x: GAME_CONFIG.BIRD.X_POSITION, y: canvas.height / 2, velocity: 0 },
        pipes: [],
        score: 0,
        highScore: gameStateRef.current.highScore,
        frame: 0,
        gameOver: false,
        started: false,
        logoIndex: gameStateRef.current.logoIndex,
        currentFactIndex: gameStateRef.current.currentFactIndex,
        isPaused: false
      };
      setShowFact(false);
    };

    const handleInput = () => {
      const gs = gameStateRef.current;
      if (gs.isPaused) return;
      if (gs.gameOver) {
        initGame();
        return;
      }
      if (!gs.started) {
        gs.started = true;
      }
      gs.bird.velocity = GAME_CONFIG.BIRD.LIFT;
    };

    const gameLoop = () => {
      const gs = gameStateRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!gs.gameOver) {
        updateBird();
        updatePipes();
        if (!gs.isPaused) {
          gs.frame++;
        }
      }
      drawBird();
      drawPipes();
      drawUI();
      requestAnimationFrame(gameLoop);
    };

    const handleClick = () => handleInput();
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleInput();
      }
    };

    canvas.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    gameLoop();

    return () => {
      canvas.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-pink-200">
      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={400}
          height={600}
          className="border-4 border-pink-600 rounded-lg cursor-pointer shadow-2xl hover:shadow-pink-500/50 transition-all active:scale-[0.98]"
          style={{
            background: 'linear-gradient(to bottom, #FFE4E6 0%, #FFCCCB 70%, #FFB6C1 100%)'
          }}
        />
        <div className="mt-4 text-rose-900 text-sm font-bold text-center">
          <span className="bg-white/80 px-2 py-1 rounded mx-1 text-pink-600">CLICK</span>
          or press
          <span className="bg-white/80 px-2 py-1 rounded mx-1 text-pink-600">SPACE</span>
          to flap • Logo changes when you die!
        </div>
      </div>

      {showFact && (
        <div className="fixed inset-0 bg-pink-600/90 flex items-center justify-center z-50 animate-[fadeIn_0.3s_ease]">
          <div className="bg-gradient-to-br from-white/95 via-pink-200/90 to-pink-300/95 border-4 border-pink-600 rounded-3xl p-8 max-w-md text-center shadow-2xl shadow-pink-600 animate-[scaleIn_0.3s_ease]">
            <div className="text-pink-600 text-2xl font-bold mb-4 drop-shadow-lg">
              🌸 Pink Fact! 🌸
            </div>
            <div className="text-rose-900 text-base leading-relaxed font-medium">
              {currentFact}
            </div>
            <div className="text-pink-600 text-xl font-bold mt-4 drop-shadow-lg">
              Game continues in <span>{countdown}</span>...
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default FlappyPinkBird;