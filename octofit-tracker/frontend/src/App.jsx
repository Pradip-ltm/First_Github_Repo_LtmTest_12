import './App.css'
import logoImg from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="container py-5">
      <header className="text-center mb-5">
        <img src={logoImg} alt="Octofit Tracker logo" className="mb-3" width="120" />
        <h1 className="display-5 fw-bold text-primary">Octofit Tracker</h1>
        <p className="lead text-muted">
          Track workouts, build teams, and stay motivated together.
        </p>
      </header>

      <section className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Activity log</h2>
              <p className="card-text">
                Record every workout and review your progress over time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Team challenges</h2>
              <p className="card-text">
                Create groups, share goals, and push each other forward.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Leaderboard</h2>
              <p className="card-text">
                Compare scores and celebrate milestones with your crew.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
