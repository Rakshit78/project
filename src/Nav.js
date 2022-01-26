export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <i class="fab fa-linkedin-in" id="nav_logo"></i>

          <form>
            <i class="fas fa-search" id="nav_search"></i>
            <input type="text" placeholder="Serach " />
          </form>
        </div>
        <ul id="nav_list">
          <li>
            <a href="#">
              <i className="fas fa-home" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i class="fas fa-user-friends"></i>Network
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-comments"></i>Mesagging
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-bell"></i>
              Notification
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-briefcase"></i>Jobs
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-dice-four"></i>Work
            </a>
          </li>
        </ul>
        <i class="far fa-user-circle" id="pro"></i>
      </nav>
    </>
  );
}
