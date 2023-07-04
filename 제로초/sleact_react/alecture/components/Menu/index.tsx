import { CloseModalButton } from '@components/Menu/styles';
import { CreateMenu } from '@components/Menu/styles';
import React, { CSSProperties, FC, useCallback } from 'react';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
  closeButton?: boolean;
}
const Menu: FC<Props> = ({ children, style, onCloseModal, show, closeButton }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  if (!show) return null;
  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};
// Props들의 기본값 설정
// 여기 추가하면 사용하는 곳에 closeButton 안적어도 생성됨
Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
