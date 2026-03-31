import useRaidRotation from './useRaidRotation';
import DayColumn from './DayColumn';
import './App.css'

function App() {
  const { week, unknownBosses, isLoading, error } = useRaidRotation();

  return (
    <>
      <div className="app-container">
        {isLoading && (
          <section className="loading-section">
            <div className="loading-spinner">Loading raid rotation...</div>
          </section>
        )}

        {error && (
          <section className="error-banner">
            <strong>Error:</strong> {error}
          </section>
        )}

        {unknownBosses.length > 0 && (
          <section className="warning-banner">
            <strong>⚠️ Warning:</strong> Rotation may have been updated — unrecognized boss(es): {unknownBosses.join(', ')}
          </section>
        )}

        {!isLoading && (
          <section className="main-content">
            <div className="week-container">
              {week.map((day, index) => (
                <DayColumn key={index} day={day} />
              ))}
            </div>
          </section>
        )}

        <footer className="app-footer">
          <p>Data sourced from GW2 Wiki rotation and verified against the official GW2 API</p>
        </footer>
      </div>
    </>
  )
}

export default App
