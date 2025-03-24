import { HandPeace, HandWaving, MapTrifold, Warning } from "@phosphor-icons/react";
import React, { useCallback, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const TipModal = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get("open-modal-tips");

  const toggle = useCallback(
    () => {
      searchParams.delete("open-modal-tips");
      setSearchParams(searchParams);
    },
    [location]
  );

  const tips = [
    {
      Icon: <HandWaving color="var(--bs-primary)" size={86} />,
      title: "Olá, boas-vindas!",
      Text: <p>Sou o <b>Flow Bus</b>, estou aqui para facilitar sua vida quando precisar saber os horários e pontos dos ônibus da UAST.</p>
    },
    {
      Icon: <Warning color="var(--bs-warning)" size={86} />,
      title: "Aviso!",
      Text: <p> <b> NÃO SALVO </b> nenhuma <br /> informação sua! {'🫡'}</p>
    },
    {
      Icon: <MapTrifold color="var(--bs-warning)" size={86} />,
      title: "O que são Itinerários?",
      Text: <p>É o trajeto que o ônibus percorre até o seu destino, por exemplo: O ônibus saiu da Fafopst até a UAST passando pela Santa, Mercanto e assim por diante.</p>
    },
    {
      image: '/assets/tip-trajeto.png',
      title: "E eu mostro todo o trajeto!",
      Text: <p>Sim, eu mostro o caminho todo para você, desde a origem até o seu destino {'😬'}</p>
    },
    {
      image: '/assets/tip-horarios.png',
      title: "E os horários?",
      Text: <p>Mostro também! {'🤭'} </p>
    },
    {
      image: '/assets/tip-ponto.png',
      title: "Pontos de ônibus",
      Text: <p>Quando os pontos estão listados, você pode clicar em um deles para ter mais informações {'😉'}.</p>
    },
    {
      image: '/assets/tip-ponto-proximo.png',
      title: "E o ponto mais próximo a você?",
      Text: <p>Mostro, se você permitir <br /> acessar sua localização atual.</p>
    },
    {
      Icon: <HandPeace color="var(--bs-warning)" size={86} />,
      title: "Agora vamos lá!",
      Text: <p>Caso tenha alguma dúvida ou dica de implementação, mande para <a href="mailto:jorge.otavio@ufrpe.br"> jorge.otavio@ufrpe.br</a></p>
    },
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const nextTip = () => {
    if (currentTipIndex < tips.length - 1) {
      setCurrentTipIndex(currentTipIndex + 1);
    } else {
      toggle()
    }
  };

  const prevTip = () => {
    if (currentTipIndex > 0) {
      setCurrentTipIndex(currentTipIndex - 1);
    }
  };

  const currentTip = tips[currentTipIndex]

  return (
    <Modal centered fullscreen="sm" backdrop='static' isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="border-0" toggle={toggle}>
        Se liga nas dicas!
      </ModalHeader>
      <ModalBody className="text-center d-flex flex-column align-items-center justify-content-center">
        {currentTip.Icon && (
          currentTip.Icon
        )}
        {currentTip.image && (
          <img
          src={currentTip.image}
          alt={currentTip.title}
          style={{ width: "100%", maxWidth: '200px' }}
          />
        )}
        <h4 className="mt-4 mb-2">{currentTip.title}</h4>
        {currentTip.Text}
      </ModalBody>
      <ModalFooter className="text-center d-flex border-0 flex-column">
        <small className="">
          {currentTipIndex+1} de {tips.length}
        </small>
        <div className="w-100 d-flex justify-content-between border-0">
          {currentTipIndex !==
            0 && (
              <Button color="secondary" onClick={prevTip}>
                Voltar
              </Button>
            )}
            <span></span>
          <Button color="primary" onClick={nextTip}>
            {currentTipIndex === tips.length - 1 ? "Concluir" : "Próxima"}
          </Button>
        </div>
        </ModalFooter>
    </Modal>
  );
};

export default TipModal;
