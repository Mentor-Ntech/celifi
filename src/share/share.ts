export const shareToGoogleMail = (address:string) => {
    const subject = encodeURIComponent("SHARING ADDRESS");
    const body = encodeURIComponent(`ADDRESS: ${address}`);
    const mailToLink = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailToLink, '_blank');
  };

  export const shareToWhatsApp = (address:string) => {
    const text = encodeURIComponent(`${address}`);
    const whatsappLink = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappLink, '_blank');
  };