export const COMPANY_INFO = {
  name: 'DISMERCA COLOMBIA',
  legalName: 'DISMERCA COLOMBIA S.A.S.',
  nit: '900769511-8',
  address: 'Calle 38 # 52-50',
  city: 'Medellín, Antioquia, Colombia',
  phoneDisplay: '+57 310 446 7970',
  phoneTel: '+573104467970',
  whatsappRaw: '573104467970',
  whatsappLink: 'https://wa.me/573104467970',
  email: 'soporte@dismercacolombia.online',
  domain: 'https://dismercacolombia.online/',
  brands: ['Victory', 'Kymco', 'Kawasaki', 'Benelli', 'Stärker'] as const,
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1956699638426!2d-75.5772393241857!3d6.23792612642598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44284b39b0a1a5%3A0x6d117c768cbfcf4a!2sCl.%2038%20%2352-50%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco',
};

export const getWhatsAppUrlWithMsg = (message: string) => {
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};
