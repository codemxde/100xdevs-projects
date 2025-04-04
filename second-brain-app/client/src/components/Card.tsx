import Document from "../icons/Document";
import Share from "../icons/Share";
import Trash from "../icons/Trash";

export default function Card() {
  return (
    <div className=" m-12 w-[20%] border rounded-md flex flex-col items-center">
      {/* Header */}
      <div className=" w-full flex justify-between p-4">
        {/* Type icon and Title */}
        <div className="flex items-center gap-x-4">
          <Document size="sm" />
          <h1>Project ideas</h1>
        </div>

        {/* Share and Delete Icons */}
        <div className="flex gap-x-4 text-cardIcon items-center">
          <Share styles="cursor-pointer" size="sm" />
          <Trash styles="cursor-pointer" size="sm" />
        </div>
      </div>
      {/* Embedded Contebt */}
      {/* <iframe
        width="90%"
        height={"50%"}
        className="rounded-lg"
        src="https://www.youtube.com/embed/I0fgkcTbBoI?si=-NKyZEVe0X2kGcVP"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <div className="w-[90%] flex justify-center">
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/sama/status/1908163013192069460?ref_src=twsrc%5Etfw"></a>
        </blockquote>
      </div>
    </div>
  );
}
