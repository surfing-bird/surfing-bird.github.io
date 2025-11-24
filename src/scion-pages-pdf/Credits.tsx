import { PagePDF, Text, Heading3 } from "@/components";

const Credits = () => (
  <PagePDF id="credits">
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex flex-col items-center text-center gap-8 w-full">
        <div className="flex flex-col items-center gap-2">
          <span className="text-5xl font-bold">THE SCION</span>
          <span className="text-xl">Version 1.0</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Heading3>Created By</Heading3>
          <Text className="!text-[12px]">Surfingbird</Text>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Heading3>Artwork</Heading3>
          <Text className="!text-[12px]">
            Wyvern VS Tiefling © 2015 Dean Spencer, used with permission. All
            rights reserved.
          </Text>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Heading3>Cover Art Design</Heading3>
          <Text className="!text-[12px]">Jonas Tintenseher</Text>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Heading3>Playtesters</Heading3>
          <div className="flex flex-col gap-1">
            <Text className="!text-[12px]">Exocist</Text>
            <Text className="!text-[12px]">Tamwin5</Text>
            <Text className="!text-[12px]">Mattelonian</Text>
            <Text className="!text-[12px]">Schmarauder</Text>
            <Text className="!text-[12px]">Jonas Tintenseher</Text>
            <Text className="!text-[12px]">KingGurke</Text>
            <Text className="!text-[12px]">Sunbear Games</Text>
            <Text className="!text-[12px]">Zetesofos</Text>
            <Text className="!text-[12px]">miskatonic</Text>
            <Text className="!text-[12px]">Vinny</Text>
            <Text className="!text-[12px]">Moffles</Text>
            <Text className="!text-[12px]">Mike</Text>
            <Text className="!text-[12px]">WrenChappel</Text>
            <Text className="!text-[12px]">
              And many others that participated in the playtesting process!
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div>
          <Text className="text-[14px] text-center">
            Scion is an independent product published under the DRAW STEEL
            Creator License and is not affiliated with MCDM Productions, LLC.
            DRAW STEEL © 2024 MCDM Productions, LLC.
          </Text>
        </div>

        <div className="flex justify-center items-center mt-4">
          <img
            src="/Powered_By_Draw_Steel.webp"
            alt="Powered By Draw Steel"
            className="w-64"
          />
        </div>
      </div>
    </div>
  </PagePDF>
);

export default Credits;
