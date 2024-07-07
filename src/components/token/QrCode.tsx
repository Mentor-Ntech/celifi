import QRCode from "react-qr-code";

const QrCode = ({ value }: { value: `0x${string}` }) => {
  return (
    <div className="bg-white p-2.5 mx-auto max-w-[200px] w-full">
      <QRCode
        size={256}
        className="w-full max-w-full h-auto"
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCode;
