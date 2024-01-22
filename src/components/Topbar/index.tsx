import "./index.scss";

function Topbar({ photoURL }: TopbarProps) {
  return (
    <div className="top-bar">
      <div className="topbar-left">
        <img
          className="docs-icon"
          src="https://th.bing.com/th/id/OIP.3up53gJy1YcJ4PJ_yy6flAHaHa?w=165&h=180&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <p className="top-title">Docs</p>
      </div>

      <img className="top-image" src={photoURL} alt="" />
    </div>
  );
}

export default Topbar;
