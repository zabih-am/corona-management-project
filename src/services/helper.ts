export const getDeviceType = (): string => {
  if (window.innerWidth <= 600)
  {
		return "mobile";
	}
  if (window.innerWidth < 960 && window.innerWidth > 600) 
  {
		return "tablet";
	}
	return "desktop";
};