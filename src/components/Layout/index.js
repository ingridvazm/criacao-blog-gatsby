import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"


import GlobalStyles from '../../styles/global'
import * as S from './style'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>{children }</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout