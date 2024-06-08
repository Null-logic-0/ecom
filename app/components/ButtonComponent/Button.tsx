/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import styles from "./Button.module.scss";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

type Props = {
  title: string;
  className?: string;
  mode?: 'fill' | 'outline' | 'color';
  icon?: boolean;
  link?: Url;
  img: string;
  size?: 'medium' | 'large'; 
};

export default (props: Props) => {
  const classNames = [styles.container, props.className];

  if (props.mode === 'outline') classNames.push(styles.outline);
  else if (props.mode === 'color') classNames.push(styles.color);
  else classNames.push(styles.fill);

  if (props.size === 'large') classNames.push(styles.large);
  else classNames.push(styles.medium); 

  return (
    <button  className={classNames.join(' ').trim()}>
     {props.title} {props.icon && <Image src={props.img} alt="icon" width={15} height={12} />} 
    </button>
  );
};
