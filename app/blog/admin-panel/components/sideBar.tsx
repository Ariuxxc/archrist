import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Link from 'next/link';
 import './sideBar.css';
   import { SVGProps } from 'react';
function Sidebar() {
   const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
      </svg>
    );

    const UserIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
    );

    const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
      </svg>
    );

    const TaskIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
      </svg>
    );
    const PostIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
      </svg>
    );
  return (

<>
    
    <div className="d-flex" style={{height: '100vh'}}>
      {/* Sidebar */}

      <nav className="text-light vh-100 p-3" style={{ width: '250px', backgroundColor: '#343a40', transition: 'background-color 0.3s' }}>
        <div className="sidebar-sticky">
          <div className="d-flex align-items-center mb-4">
            <h4 className="text-light">Administration</h4>
          </div>

          {/* Menu Links */}
          <ul className="nav flex-column">
            <li className="nav-item mb-2 hover">
              <Link href="/" className="nav-link text-light d-flex align-items-center" aria-label="Accueil">
             <HomeIcon />   <i className="bi bi-house-door-fill me-2"></i> Accueil
              </Link>
            </li>
            <li className="nav-item mb-2 hover">
              <Link href="/admin-panel/users" className="nav-link text-light d-flex align-items-center" aria-label="Users">
              <UserIcon />  <i className="bi bi-person-fill me-2"></i> Users 
              </Link>
            </li>
            <li className="nav-item mb-2 hover">
              <Link href="/stats" className="nav-link text-light d-flex align-items-center" aria-label="Stats">
              <StatsIcon />  <i className="bi bi-bar-chart-fill me-2"></i> Stats
              </Link>
            </li>
            <li className="nav-item mb-2 hover">
              <Link href="/blog/admin-panel/To-do" className="nav-link text-light d-flex align-items-center" aria-label="Tâches à effectuer">
                <TaskIcon />  <i className="bi bi-envelope-fill me-2"></i> Tâches à effectuer
              </Link>
            </li>
            <li className="nav-item mb-2 hover">
              <Link href="/blog/admin-panel/posts" className="nav-link text-light d-flex align-items-center" aria-label="Posts">
              <PostIcon />  <i className="bi bi-file-earmark-text-fill me-2"></i> Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      



    </div>
    </>
  );
}

export default Sidebar;
