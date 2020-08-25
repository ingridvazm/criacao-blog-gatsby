import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './style'

const SocialLinks = () => (
    <S.SocialLinksWrappers>
        <S.SocialLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label]


                return (<S.SocialLinksItem key={i}>
                        <S.SocialLinksLink 
                        href= {link.url} 
                        title={link.label} 
                        target="_blank" 
                        rel="noopener noreferrer">
                    <S.IconWrapper>
                        <Icon />
                    </S.IconWrapper>
                        </S.SocialLinksLink>
                    </S.SocialLinksItem>
                )
            })}

        </S.SocialLinksList>
    </S.SocialLinksWrappers>

)

export default SocialLinks