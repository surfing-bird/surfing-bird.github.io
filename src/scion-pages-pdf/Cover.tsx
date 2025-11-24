import { PagePDF } from "@/components";

const Cover = () => (
  <PagePDF id="cover" className="!p-0">
    {/* Stretch the image 'Scion_Class_Cover' over this entire page */}
    <img
      src="/Scion Class Cover.png"
      alt="Scion Class Cover"
      className="w-full h-full"
    />
  </PagePDF>
);

export default Cover;
