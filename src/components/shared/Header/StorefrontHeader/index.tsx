import * as React from "react"
import {inspect} from "util"
import styles from  "@/styles/Header.module.css"
import {Col, FormControl, InputGroup, Row} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Logo from "@/components/shared/Logo";
const StorefrontHeader: React.FC = () => {
  return (
    <>
      <Row className={styles.background}>
        <Col md={6} className="mt-2">
          <Logo/>
        </Col>
        <Col md={6} className="mt-2 text-center">
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <InputGroup>
                <FormControl placeholder="Pesquisar Produto" className={styles.input} />
              </InputGroup>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faSearch} />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default StorefrontHeader
