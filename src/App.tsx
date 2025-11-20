import './App.css';
import { Widget, type IWidgetSettings } from '@aithinks/chatbot-react-widget';
import { useState, useEffect } from 'react';
import { WidgetService } from './utils/services';
import { Form } from './components/form';
import { Logo } from './components/logo';
import { Infos } from './components/infos';
import { WhiteArrow } from './components/whiteArrow';

function App() {
  const pathnameAppId = window.location.pathname.replace('/', '');
  const [showWidget, setShowWidget] = useState(!!pathnameAppId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<IWidgetSettings | null>(null);
  const [appId, setAppId] = useState(pathnameAppId || '');

  const apiUrl = import.meta.env.VITE_WIDGET_API_URL;

  useEffect(() => {
    const fetchSettings = async () => {
      if (!appId) return;
      setLoading(true);
      setError(null);
      const data = await WidgetService.fetchWidgetSettings(apiUrl, appId);
      if (data) {
        setSettings(data);
      } else {
        setError('Geçersiz App ID veya sunucu hatası.');
        setShowWidget(false);
      }
      setLoading(false);
    };

    if (showWidget && appId) {
      fetchSettings();
    }
  }, [appId, showWidget, apiUrl]);

  const handleSubmit = async (e: React.FormEvent, newAppId: string) => {
    e.preventDefault();
    if (newAppId.trim()) {
      setAppId(newAppId);
      window.history.pushState({}, '', `/${newAppId}`);
      setShowWidget(true);
    }
  };

  const handleReturn = () => {
    setAppId('');
    setSettings(null);
    setShowWidget(false);
    setError(null);
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="app-container">
      <div className="card">
        <Logo />

        {!showWidget && <Form handleSubmit={handleSubmit} error={error} />}

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Widget ayarları yükleniyor...</p>
          </div>
        )}

        {!loading && settings && (
          <div className="success-content">
            <div className="status-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 4L6 11.5L2.5 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Bağlantı Başarılı
            </div>

            <Infos
              appId={appId}
              botName={settings.botName}
              name={settings.name}
            />

            <button className="return-button" onClick={handleReturn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 4L2 10L8 16M2 10H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Geri Dön
            </button>
          </div>
        )}
      </div>

      {!loading && settings && (
        <>
          <WhiteArrow botName={settings.botName} />
          <Widget appId={appId} mode="dev" />
        </>
      )}
    </div>
  );
}

export default App;
