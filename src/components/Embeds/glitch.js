import styles from './embed.module.css';

export default function Glitch({ embedUrl, title, allow }) {
  return (
    <div
      className={`glitch-embed-wrap ${styles['embed-wrapper']}`}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <iframe
        src={embedUrl}
        title={title}
        allow={allow}
        style={{ height: '100%', width: '100%', border: 0 }}
      ></iframe>
    </div>
  );
}
