import React from 'react';
import EmojiPopover from '../EmojiPopover';
import ImgPopover from '../ImgPopover';
import { IChatToolBar } from '../../types';
import style from './style.module.css';

export default function ChatToolBar({ tools = [], onEmojiSelect, onImage }: IChatToolBar) {
  return (
    <div className={style.content}>
      {typeof onEmojiSelect === 'function' && <EmojiPopover onSelect={onEmojiSelect} />}
      {typeof onImage === 'function' && <ImgPopover onImage={onImage} />}
      {tools.map((tool) => tool)}
    </div>
  );
}
