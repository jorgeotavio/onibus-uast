import React from "react";
import { Col } from "reactstrap";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Col className="px-2 px-lg-5" xs="12" md="4">
        <div className="mb-3">
          <span className="me-2 cursor-pointer" onClick={() => navigate("/")}>
            <ArrowLeft className="me-2" size={16} />
            Tela inicial
          </span>
        </div>
        <h1>Sobre</h1>
        <p className="fs-7">
          Essa aplicação pretende simplificar a busca pelos
          pontos de ônibus da UAST-UFRPE. Você consegue selecionar um
          ponto ou os itinerários e saber dos horários que os
          coletivos irão passar.
        </p>
        <p className="text-align-justify fs-7">
          Este app foi desenvolvido para a disciplina de <b> IHM </b>
          (Interfaces Homem Máquina), do curso de BSI (Bacharelado de
          Sistemas de Informação), pelo aluno{" "}
          <b> Jorge Luiz Otávio da Silva Brito</b>.
        </p>
        <p className="fs-7">
          Se você tem ideias ou observações para melhoria desse projeto, me envie um
          e-mail para{" "}
          <a href="mailto:jorge.otavio@ufrpe.br">jorge.otavio@ufrpe.br</a>.
        </p>
        <p className="fs-7">
          Caso precise acessar os dados de itinerários oficiais da UAST,
          acesse <a href="https://www.uast.ufrpe.br/br/onibus-itinerario-23" target="_blank">
            Dados dos itinerários oficiais
          </a>.
        </p>
      </Col>
    </div>
  );
};

export default About;
