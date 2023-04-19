import "./style.css";

type Props = {
  type: any;
  name: string;
  img: any;
  id: number;
};

function Card({ type, name, img, id }: Props) {
  const typeHandle = () => {
    if (type.length > 1) {
      return type.join(" | ");
    }
    return type[0];
  };

  return (
    <>
      <div className={`poke_card ${type[0]}`}>
        <div className="poke_img">
          <span>#{id}</span>
          <img src={img} alt="" />
        </div>
        <span className="chao"></span>
        <div className="poke_info">
          <p>{typeHandle()}</p>
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
}

export default Card;
