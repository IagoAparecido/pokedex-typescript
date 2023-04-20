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
  name_stats: any;
};

function Card({
  type,
  name,
  img,
  id,
  abilities,
  base_stats,
  name_stats,
}: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleType = () => {
    if (type.length > 1) {
      return type.join(" | ");
    }
    return type[0];
  };

  const handleAbilities = () => {
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
            <p>{handleType()}</p>
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
            <p>{handleType()}</p>
          </div>
          <div className="modal_habilities">
            <h4>Abilities</h4>
            <p>{handleAbilities()}</p>
          </div>
          <div className="modal_stats">
            <h2>Status</h2>
            <div className="modal_stats_content">
              <div className="stat_1">
                <h5 className={name_stats[0]}>
                  HP:
                  <br /> {base_stats[0]}
                </h5>
                <br />
                <br />

                <h5 className={name_stats[1]}>
                  ATTACK:
                  <br /> {base_stats[1]}
                </h5>
              </div>
              <div className="stat_2">
                <h5 className={name_stats[2]}>
                  DEFENSE: <br /> {base_stats[2]}
                </h5>
                <br />
                <br />
                <h5 className={name_stats[3]}>
                  SPECIAL-ATTACK: <br /> {base_stats[3]}
                </h5>
              </div>
              <div className="stat_3">
                <h5 className={name_stats[4]}>
                  SPECIAL-DEFENSE: <br /> {base_stats[4]}
                </h5>
                <br />
                <h5 className={name_stats[5]}>
                  SPEED:
                  <br /> {base_stats[5]}
                </h5>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Card;
