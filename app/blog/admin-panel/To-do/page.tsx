import Sidebar from "../components/sideBar"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ToDo() {
    return (
<>
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 p-4">
      <div className="card shadow-lg mx-auto" style={{maxWidth: '800px'}}>
        <div className="card-header bg-primary text-white">
          <h4 className="card-title font-bold text-center mb-0">Tâches à faire</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">Liste des tâches :</p>
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>Ajouter une tâche
            </button>
          </div>
          <div className="alert alert-info" role="alert">
            <i className="bi bi-info-circle me-2"></i>Aucune tâche pour l&apos;instant
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
}