import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from "../Avatar"

import * as S from './style'

const Profile =() => {
    const {
        site: {
            siteMetadata: { title, position, description},
        }
    } = useStaticQuery(graphql` 
        query MyQuery {
            site {
                siteMetadata {
                    description
                    title
                    position
                }
            }
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

    `)
    return (
        <S.ProfileWrapper>
        <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>{title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        
        </S.ProfileLink>
        <S.ProfileDescrition>{description}</S.ProfileDescrition>
    </S.ProfileWrapper>
    )
}



export default Profile 