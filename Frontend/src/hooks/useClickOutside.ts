import { useEffect } from 'react';

type RefType = React.RefObject<HTMLElement>;

export function useClickOutside(refs: RefType[], callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!event.target) return;
      
      const clickedOutside = refs.every(ref => {
        return !ref.current?.contains(event.target as Node);
      });

      if (clickedOutside) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
}