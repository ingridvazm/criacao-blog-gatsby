import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


import * as S from './style'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "profilePhoto.jpeg"}){
                    childImageSharp {
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                        
                    
                    }

                }
            }
        `   
    )

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar