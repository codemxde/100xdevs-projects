import Add from "../icons/Add";
import Document from "../icons/Document";
import Link from "../icons/Link";
import SecondBrain from "../icons/SecondBrain";
import Share from "../icons/Share";
import XOutline from "../icons/XOutline";
import YouTubeOutline from "../icons/YouTubeOutline";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Category from "./ui/Category";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen min-w-72 w-1/5 p-3 border bg-white">
        {/* Brand */}
        <div className="flex w-full items-center text-2xl gap-x-3 font-semibold">
          {/* Logo */}
          <SecondBrain size={"logo"} />

          {/* Brand Title */}
          <h1 className="text-brandColor">Second Brain</h1>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-y-7 ml-4 mt-16">
          <Category logo={<XOutline />} category="Tweets" />
          <Category logo={<YouTubeOutline />} category="Videos" />
          <Category logo={<Document size="md" />} category="Documents" />
          <Category logo={<Link />} category="Links" />
        </div>
      </div>

      {/* Main Content */}
      <div className="h-screen w-4/5 min-w-[500px] bg-body">
        {/* Header */}
        <header className="flex justify-between items-center px-7 py-10">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-mainTextColor">All Notes</h1>

          {/* Content Buttons */}
          <div className="flex gap-x-4">
            <Button
              variant="secondary"
              text="Share Brain"
              size="sm"
              startIcon={<Share size="sm" />}
            />

            <Button
              variant={"primary"}
              text="Add Content"
              size={"sm"}
              startIcon={<Add size={"sm"} />}
            />
          </div>
        </header>

        {/* Actual Cards */}
        <div className="flex flex-wrap">
          <Card src="https://www.youtube.com/embed/I0fgkcTbBoI?si=-NKyZEVe0X2kGcVP" />
          <Card src="https://www.youtube.com/watch?v=SvAjpxfuYyY" />
          <Card src="https://www.youtube.com/embed/I0fgkcTbBoI?si=-NKyZEVe0X2kGcVP" />
          <Card src="https://www.youtube.com/embed/I0fgkcTbBoI?si=-NKyZEVe0X2kGcVP" />
        </div>
      </div>
    </div>
  );
}
