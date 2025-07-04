'use client';

import React, { useState } from 'react';
import { TrendExample } from './TrendExample';

// Ejemplo Neumorfismo
export const NeumorphismExample = () => {
  const [activeControl, setActiveControl] = useState<string | null>(null);
  
  return (
    <TrendExample
      title="Neumorfismo - Panel de Control Smart Home"
      description="Dashboard realista con controles neumórficos para hogar inteligente"
      code={`/* Neumorfismo CSS Profesional */
.neuro-container {
  background: #e0e5ec;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 
    4px 4px 8px #d5dae1,
    -4px -4px 8px #ebeef3;
}

.neuro-control {
  background: #e0e5ec;
  border-radius: 20px;
  border: none;
  box-shadow: 
    3px 3px 6px #d5dae1,
    -3px -3px 6px #ebeef3;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.neuro-control:active {
  box-shadow: 
    inset 2px 2px 4px #d5dae1,
    inset -2px -2px 4px #ebeef3;
  transform: scale(0.98);
}`}
        >
      <div className="w-full h-full bg-gray-100 p-8 flex items-center justify-center">
        <div 
          className="w-full max-w-md mx-auto p-8 rounded-3xl"
          style={{ 
            background: '#e0e5ec',
            boxShadow: '4px 4px 8px #d5dae1, -4px -4px 8px #ebeef3'
          }}
        >
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Sala Principal</h3>
          <p className="text-gray-500 text-sm">3 dispositivos activos</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Control de Luz */}
          <button
            className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
              activeControl === 'light' ? 'scale-95' : ''
            }`}
            style={{
              background: '#e0e5ec',
              boxShadow: activeControl === 'light' 
                ? 'inset 2px 2px 4px #d5dae1, inset -2px -2px 4px #ebeef3'
                : '3px 3px 6px #d5dae1, -3px -3px 6px #ebeef3'
            }}
            onMouseDown={() => setActiveControl('light')}
            onMouseUp={() => setActiveControl(null)}
            onMouseLeave={() => setActiveControl(null)}
          >
            <div className="text-2xl mb-2">💡</div>
            <span className="text-xs font-medium text-gray-600">Luz</span>
          </button>
          
          {/* Control de Temperatura */}
          <button
            className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
              activeControl === 'temp' ? 'scale-95' : ''
            }`}
            style={{
              background: '#e0e5ec',
              boxShadow: activeControl === 'temp' 
                ? 'inset 2px 2px 4px #d5dae1, inset -2px -2px 4px #ebeef3'
                : '3px 3px 6px #d5dae1, -3px -3px 6px #ebeef3'
            }}
            onMouseDown={() => setActiveControl('temp')}
            onMouseUp={() => setActiveControl(null)}
            onMouseLeave={() => setActiveControl(null)}
          >
            <div className="text-2xl mb-2">🌡️</div>
            <span className="text-xs font-medium text-gray-600">22°C</span>
          </button>
        </div>
        
        {/* Slider de Volumen */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Audio</span>
            <span className="text-xs text-gray-500">75%</span>
          </div>
          <div 
            className="h-3 rounded-full relative"
            style={{
              background: '#e0e5ec',
              boxShadow: 'inset 1px 1px 2px #d5dae1, inset -1px -1px 2px #ebeef3'
            }}
          >
            <div 
              className="absolute top-0 left-0 h-full rounded-full"
                              style={{ 
                  width: '75%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  boxShadow: '1px 1px 3px #c8d0dc'
                }}
            />
          </div>
        </div>
      </div>
      </div>
    </TrendExample>
  );
};

// Ejemplo Glassmorfismo
export const GlassmorphismExample = () => {
  return (
    <TrendExample
      title="Glassmorfismo - Music Player Interface"
      description="Reproductor de música con interfaz glass profesional"
      code={`/* Glassmorfismo CSS Profesional */
.glass-container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-button {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}`}
    >
      <div 
        className="relative w-full h-full min-h-[400px] flex items-center justify-center p-8"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(255, 94, 77, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #1e1e2e 0%, #2d1b69 100%)
          `
        }}
      >
        <div 
          className="w-80 p-8 rounded-3xl border border-white/20 backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Album Art */}
          <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden relative">
            <div 
              className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center"
            >
              <div className="text-6xl">🎵</div>
            </div>
            <div 
              className="absolute inset-0 rounded-2xl border border-white/20"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            />
          </div>
          
          {/* Song Info */}
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-lg mb-1">Cosmic Journey</h3>
            <p className="text-white/70 text-sm">Electronic Dreams</p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div 
              className="h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{ width: '35%' }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center space-x-6">
            <button 
              className="w-12 h-12 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <span className="text-white text-lg">⏮</span>
            </button>
            
            <button 
              className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:scale-105"
              style={{ background: 'rgba(255, 255, 255, 0.12)' }}
            >
              <span className="text-white text-xl">▶️</span>
            </button>
            
            <button 
              className="w-12 h-12 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <span className="text-white text-lg">⏭</span>
            </button>
          </div>
        </div>
      </div>
    </TrendExample>
  );
};

// Ejemplo Material Design
export const MaterialDesignExample = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fabHover, setFabHover] = useState(false);
  
  const tabs = ['Recientes', 'Favoritos', 'Archivados'];
  
  return (
    <TrendExample
      title="Material Design - Email App Interface"
      description="Aplicación de email siguiendo principios de Material Design 3"
      code={`/* Material Design 3 - Tokens */
:root {
  --md-sys-color-primary: #1976d2;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-surface: #ffffff;
  --md-sys-color-on-surface: #1c1b1f;
  --md-sys-elevation-level1: 0 1dp 2dp rgba(0,0,0,0.15);
  --md-sys-elevation-level2: 0 1dp 3dp rgba(0,0,0,0.12);
}

.material-surface {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  border-radius: 12px;
  elevation: var(--md-sys-elevation-level1);
}

.material-fab {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: 16px;
  elevation: var(--md-sys-elevation-level2);
  transition: elevation 0.2s cubic-bezier(0.2, 0, 0, 1);
}`}
    >
      <div className="w-full max-w-sm mx-auto bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
        {/* App Bar */}
        <div className="bg-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </button>
              <h2 className="text-lg font-medium">Inbox</h2>
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Tab Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 px-4 text-sm font-medium transition-all duration-200 relative ${
                  activeTab === index 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Email List */}
        <div className="bg-white h-80 overflow-y-auto">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {['A', 'M', 'S', 'R'][item - 1]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {['Ana García', 'Marketing Team', 'Sarah Wilson', 'Roberto López'][item - 1]}
                    </p>
                    <span className="text-xs text-gray-500">
                      {['9:30', '8:45', 'Ayer', '2 días'][item - 1]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-1">
                    {[
                      'Reunión de proyecto mañana',
                      'Nuevas métricas disponibles',
                      'Propuesta de diseño revisada',
                      'Seguimiento de tareas pendientes'
                    ][item - 1]}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {[
                      'Hola, ¿podemos reagendar la reunión?',
                      'Los números de este mes están disponibles...',
                      'He actualizado la propuesta basándome en...',
                      'Necesitamos revisar el estado de...'
                    ][item - 1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAB */}
        <div className="absolute bottom-6 right-6">
          <button
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            style={{
              boxShadow: fabHover 
                ? '0 6px 12px rgba(25, 118, 210, 0.3), 0 2px 4px rgba(0,0,0,0.1)'
                : '0 3px 6px rgba(25, 118, 210, 0.2), 0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setFabHover(true)}
            onMouseLeave={() => setFabHover(false)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM9.75 9a.75.75 0 0 1 .75-.75h.75v-.75a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75A.75.75 0 0 1 9.75 9Z" />
            </svg>
          </button>
        </div>
      </div>
    </TrendExample>
  );
};

// Ejemplo Dark Mode
export const DarkModeExample = () => {
  const [isDark, setIsDark] = useState(true);
  const [notifications, setNotifications] = useState(true);
  
  return (
    <TrendExample
      title="Dark Mode Design - Settings Dashboard"
      description="Panel de configuración profesional con sistema de color adaptativo"
      code={`/* Sistema Dark Mode Profesional */
:root {
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-bg-tertiary: #f1f5f9;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-border: #e2e8f0;
  --color-accent: #3b82f6;
}

[data-theme="dark"] {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-bg-tertiary: #334155;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #cbd5e1;
  --color-border: #475569;
  --color-accent: #60a5fa;
}

.adaptive-card {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`}
    >
      <div 
        className={`w-full max-w-md mx-auto rounded-2xl border transition-all duration-500 ${
          isDark 
            ? 'bg-slate-900 border-slate-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Configuración
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                Personaliza tu experiencia
              </p>
            </div>
            <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <svg className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Settings */}
        <div className="p-6 space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                {isDark ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Modo {isDark ? 'Oscuro' : 'Claro'}
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  {isDark ? 'Reduce el cansancio visual' : 'Mejor para uso diurno'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isDark 
                  ? 'bg-blue-600 focus:ring-offset-slate-900' 
                  : 'bg-gray-300 focus:ring-offset-white'
              }`}
            >
              <div 
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                  isDark ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
          
          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                <svg className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Notificaciones
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  Recibir alertas importantes
                </p>
              </div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications 
                  ? 'bg-blue-600' 
                  : isDark ? 'bg-slate-700' : 'bg-gray-300'
              } ${isDark ? 'focus:ring-offset-slate-900' : 'focus:ring-offset-white'}`}
            >
              <div 
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                  notifications ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
          
          {/* Stats Card */}
          <div className={`p-4 rounded-xl border ${
            isDark 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <h4 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Estadísticas de Uso
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  2.4h
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  Tiempo hoy
                </p>
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  89%
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  Productividad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TrendExample>
  );
};

// Ejemplo Brutalismo
export const BrutalismExample = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <TrendExample
      title="Brutalismo Digital - Portfolio Creativo"
      description="Portfolio de artista digital con estética brutalmente honesta"
      code={`/* Brutalismo Digital Avanzado */
.brutal-layout {
  background: #ff0066;
  font-family: 'Courier New', monospace;
  color: #000000;
  border: 8px solid #000000;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.brutal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
  border-collapse: collapse;
}

.brutal-card {
  background: #ffff00;
  border: 4px solid #000000;
  transform: rotate(-2deg);
  transition: transform 0.1s linear;
}

.brutal-card:hover {
  transform: rotate(2deg) scale(1.02);
  background: #00ff00;
  box-shadow: 8px 8px 0px #ff0066;
}

.brutal-text {
  font-weight: 900;
  text-shadow: 3px 3px 0px #ffffff;
  font-size: clamp(16px, 4vw, 32px);
}`}
    >
      <div className="w-full h-full bg-pink-500 border-8 border-black p-4 font-mono overflow-hidden">
        {/* Header */}
        <div className="mb-6">
          <h2 
            className="text-3xl font-black text-black uppercase transform -rotate-1 mb-2"
            style={{ 
              fontFamily: 'Courier New, monospace',
              textShadow: '4px 4px 0px #ffffff',
              letterSpacing: '-3px'
            }}
          >
            MAYA_CODES
          </h2>
          <div className="bg-yellow-400 border-4 border-black p-2 transform rotate-1 inline-block">
            <p className="text-xs font-black text-black uppercase">
              DIGITAL ARTIST • CHAOS CREATOR • REALITY HACKER
            </p>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 gap-0 mb-6">
          {/* Project 1 */}
          <div 
            className="bg-yellow-400 border-4 border-black p-4 transform -rotate-2 hover:rotate-1 hover:scale-105 hover:bg-green-400 transition-all duration-150 cursor-pointer"
            style={{ boxShadow: isHovered ? '6px 6px 0px #000000' : '0px 0px 0px #000000' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-4xl mb-2">🔥</div>
            <h3 className="text-lg font-black text-black uppercase mb-1">
              PROJEKT_01
            </h3>
            <p className="text-xs font-bold text-black">
              AGGRESSIVE_GEOMETRY
            </p>
          </div>
          
          {/* Project 2 */}
          <div className="bg-cyan-400 border-4 border-black p-4 transform rotate-1 hover:-rotate-2 hover:scale-105 hover:bg-purple-400 transition-all duration-150 cursor-pointer">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-lg font-black text-black uppercase mb-1">
              CHAOS_02
            </h3>
            <p className="text-xs font-bold text-black">
              BROKEN_SYSTEMS
            </p>
          </div>
          
          {/* Project 3 */}
          <div className="bg-red-400 border-4 border-black p-4 transform rotate-2 hover:-rotate-1 hover:scale-105 hover:bg-orange-400 transition-all duration-150 cursor-pointer">
            <div className="text-4xl mb-2">💀</div>
            <h3 className="text-lg font-black text-black uppercase mb-1">
              DEATH_UI
            </h3>
            <p className="text-xs font-bold text-black">
              ANTI_PATTERNS
            </p>
          </div>
          
          {/* Project 4 */}
          <div className="bg-green-400 border-4 border-black p-4 transform -rotate-1 hover:rotate-2 hover:scale-105 hover:bg-pink-400 transition-all duration-150 cursor-pointer">
            <div className="text-4xl mb-2">🌈</div>
            <h3 className="text-lg font-black text-black uppercase mb-1">
              NEON_RAGE
            </h3>
            <p className="text-xs font-bold text-black">
              COLOR_VIOLENCE
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <div className="bg-black text-yellow-400 p-2 border-4 border-yellow-400 transform rotate-1">
            <p className="text-xs font-black uppercase">
              CONTACT: MAYA@CHAOS.NET
            </p>
          </div>
          
          <button 
            className="bg-purple-500 border-4 border-black px-4 py-2 font-black text-white uppercase transform -rotate-2 hover:rotate-1 hover:bg-black hover:text-purple-500 transition-all duration-100"
            style={{ 
              fontFamily: 'Courier New, monospace',
              textShadow: '2px 2px 0px #000000'
            }}
          >
            HIRE_ME
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 bg-white border-2 border-black p-1 transform rotate-45">
          <div className="w-2 h-2 bg-black"></div>
        </div>
        <div className="absolute bottom-4 left-4 bg-red-500 border-2 border-black p-1 transform -rotate-12">
          <div className="w-3 h-3 bg-yellow-400"></div>
        </div>
      </div>
    </TrendExample>
  );
};

// Ejemplo Claymorphism
export const ClaymorphismExample = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const sliderValue = 75;
  
  return (
    <TrendExample
      title="Claymorphism - Meditation App Interface"
      description="App de meditación con elementos suaves y amigables estilo plastilina"
      code={`/* Claymorphism CSS Profesional */
.clay-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32px;
  padding: 24px;
}

.clay-button {
  background: linear-gradient(145deg, #ff9a9e, #fecfef);
  border-radius: 24px;
  border: none;
  box-shadow: 
    4px 4px 8px rgba(255, 154, 158, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.clay-button:active {
  box-shadow: 
    2px 2px 4px rgba(255, 154, 158, 0.1),
    -2px -2px 4px rgba(255, 255, 255, 0.4);
  transform: scale(0.96);
}

.clay-card {
  background: linear-gradient(145deg, #a8edea, #fed6e3);
  border-radius: 28px;
  box-shadow: 
    4px 4px 8px rgba(168, 237, 234, 0.08),
    -4px -4px 8px rgba(255, 255, 255, 0.4);
}`}
    >
      <div className="w-full h-full bg-purple-50 p-8 flex items-center justify-center">
        <div 
          className="w-full max-w-xs mx-auto p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '500px'
          }}
        >
        {/* Header */}
        <div className="text-center mb-8">
                     <div 
             className="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center"
             style={{
               background: 'linear-gradient(145deg, #ff9a9e, #fecfef)',
               boxShadow: '3px 3px 6px rgba(255, 154, 158, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.5)'
             }}
           >
            <span className="text-3xl">🧘‍♀️</span>
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">Mindful Moments</h3>
          <p className="text-purple-100 text-sm">Tu espacio de calma</p>
        </div>
        
        {/* Meditation Timer */}
        <div 
          className="p-6 mb-6 rounded-3xl"
                     style={{
             background: 'linear-gradient(145deg, #a8edea, #fed6e3)',
             boxShadow: '4px 4px 8px rgba(168, 237, 234, 0.08), -4px -4px 8px rgba(255, 255, 255, 0.4)'
           }}
        >
          <div className="text-center mb-4">
            <h4 className="font-semibold text-purple-800 mb-2">Sesión Actual</h4>
            <div className="text-3xl font-bold text-purple-900">15:30</div>
            <p className="text-sm text-purple-600">Respiración Consciente</p>
          </div>
          
          {/* Progress Slider */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs text-purple-600">
              <span>Progreso</span>
              <span>{sliderValue}%</span>
            </div>
            <div 
              className="h-4 rounded-full relative"
                             style={{
                 background: 'linear-gradient(145deg, #fed6e3, #a8edea)',
                 boxShadow: 'inset 2px 2px 4px rgba(168, 237, 234, 0.15), inset -2px -2px 4px rgba(255, 255, 255, 0.4)'
               }}
            >
              <div 
                className="absolute top-1 left-1 h-2 rounded-full transition-all duration-300"
                                 style={{ 
                   width: `${sliderValue - 2}%`,
                   background: 'linear-gradient(90deg, #ff9a9e, #fecfef)',
                   boxShadow: '1px 1px 2px rgba(255, 154, 158, 0.1)'
                 }}
              />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            className="py-4 px-4 rounded-2xl font-medium transition-all duration-300"
            style={{
              background: activeButton === 'pause' 
                ? 'linear-gradient(145deg, #fecfef, #ff9a9e)'
                : 'linear-gradient(145deg, #ff9a9e, #fecfef)',
                             boxShadow: activeButton === 'pause'
                 ? '2px 2px 4px rgba(255, 154, 158, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.4)'
                 : '4px 4px 8px rgba(255, 154, 158, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.4)',
              transform: activeButton === 'pause' ? 'scale(0.96)' : 'scale(1)',
              color: '#7c3aed'
            }}
            onMouseDown={() => setActiveButton('pause')}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
          >
            ⏸️ Pausa
          </button>
          
          <button
            className="py-4 px-4 rounded-2xl font-medium transition-all duration-300"
            style={{
              background: activeButton === 'skip' 
                ? 'linear-gradient(145deg, #fed6e3, #a8edea)'
                : 'linear-gradient(145deg, #a8edea, #fed6e3)',
                             boxShadow: activeButton === 'skip'
                 ? '2px 2px 4px rgba(168, 237, 234, 0.08), -2px -2px 4px rgba(255, 255, 255, 0.3)'
                 : '4px 4px 8px rgba(168, 237, 234, 0.08), -4px -4px 8px rgba(255, 255, 255, 0.3)',
              transform: activeButton === 'skip' ? 'scale(0.96)' : 'scale(1)',
              color: '#7c3aed'
            }}
            onMouseDown={() => setActiveButton('skip')}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
          >
            ⏭️ Siguiente
          </button>
        </div>
        
        {/* Bottom Stats */}
        <div 
          className="p-4 rounded-2xl text-center"
                     style={{
             background: 'linear-gradient(145deg, #fecfef, #ff9a9e)',
             boxShadow: '3px 3px 6px rgba(255, 154, 158, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.4)'
           }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-lg font-bold text-purple-800">7</div>
              <div className="text-xs text-purple-600">días seguidos</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-800">142</div>
              <div className="text-xs text-purple-600">min. totales</div>
            </div>
          </div>
                  </div>
        </div>
      </div>
    </TrendExample>
  );
};

// Componente contenedor para todos los ejemplos
export const AllTrendExamples = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <NeumorphismExample />
      <GlassmorphismExample />
      <MaterialDesignExample />
      <DarkModeExample />
      <BrutalismExample />
      <ClaymorphismExample />
    </div>
  );
}; 