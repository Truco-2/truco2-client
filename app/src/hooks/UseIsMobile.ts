import { useState, useEffect, useCallback } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);


  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 900)
  }, [])

  useEffect(() => {

    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth, handleResize]);

  return {isMobile};
};

export default useIsMobile;