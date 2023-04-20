import "./style.css";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
  type: any;
  name: string;
  img: any;
  id: number;
  abilities: string[];
  base_stats: any;
};

function Card({ type, name, img, id, abilities, base_stats }: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const typeHandle = () => {
    if (type.length > 1) {
      return type.join(" | ");
    }
    return type[0];
  };

  const abilitiesHandle = () => {
    if (abilities.length > 1) {
      return abilities.join(" | ");
    }
    return type[0];
  };

  return (
    <>
      <div onClick={handleShow}>
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="container_modal">
          <div className="modal_pokemon">
            <span>#{id}</span>
            <img src={img} alt="" />
            <div className="chao_modal"></div>
            <h1>{name}</h1>
            <p>{typeHandle()}</p>
          </div>
          <div>
            <h4>Habilidades</h4>
            <p>{abilitiesHandle()}</p>
          </div>
          <div>
            <h2>Status</h2>
            <h5>HP {base_stats[0]}</h5>
            <h5>ATTACK {base_stats[1]}</h5>
            <h5>DEFENSE {base_stats[2]}</h5>
            <h5>SPECIAL-ATTACK {base_stats[3]}</h5>
            <h5>SPECIAL-DEFENSE {base_stats[4]}</h5>
            <h5>SPEED {base_stats[5]}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Card;
