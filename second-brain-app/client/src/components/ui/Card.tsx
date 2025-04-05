import Document from "../../icons/Document";
import Share from "../../icons/Share";
import Trash from "../../icons/Trash";

interface Card {
  src: string;
}

export default function Card({ src }: Card) {
  return (
    <div className=" m-12 w-[25%] border bg-white rounded-md flex flex-col items-center">
      {/* Header */}
      <div className=" w-full flex justify-between p-4">
        {/* Type icon and Title */}
        <div className="flex items-center gap-x-4">
          <Document size="sm" />
          <h1 className="text-lg font-medium">Project ideas</h1>
        </div>

        {/* Share and Delete Icons */}
        <div className="flex gap-x-4 text-cardIcon items-center">
          <Share styles="cursor-pointer" size="sm" />
          <Trash styles="cursor-pointer" size="sm" />
        </div>
      </div>
      {/* Embedded Content */}
      {/* <iframe
        width="90%"
        height={"70%"}
        className="rounded-lg"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}

      <iframe
        width="90%"
        height={"70%"}
        src="https://www.youtube.com/embed/SvAjpxfuYyY?si=2l1rfDcQMxy2i5QL"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* <div className="">
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/sama/status/1908163013192069460?ref_src=twsrc%5Etfw"></a>
        </blockquote>
      </div> */}
    </div>
  );
}
