export default function Image({ source, altText }) {
  return <img className="round-image" src={source} alt={altText} />;
}
