interface Status {
  status: "online" | "offline";
}

const statusStyles = {
  online: "#00ff1e",
  offline: "#ff0000",
};

export default function Online({ status }: Status) {
  return (
    <svg
      fill={statusStyles[status]}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64px"
      height="64px"
      viewBox="0 0 25.334 25.334"
      xmlSpace="preserve"
      className="size-2"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
