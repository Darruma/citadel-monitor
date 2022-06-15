import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Events = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 400px;
`
const Entities = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 175px;

`
const HeaderWrapper = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    font-size: 25px;
    flex-direction: row;
    margin: 0 auto;
    background-color: #202033;
    align-items: center;
    color: white;
`
const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

function Nav({ name, path }: { name: string, path: string }) {
    const router = useRouter()
    const currentRoute = router.pathname
    const linkStyle = {
        textDecoration: currentRoute == path ? 'underline' : 'none'
    }
    return (
        <Link href={path} passHref>
            <a style={linkStyle}>
                {name}
            </a>
        </Link>
    )
}

function Header({ children }) {
    return (
        <>
            <HeaderWrapper>
                <Image 
                    src="/citadel.svg"
                    alt="CitadelDao"
                    height={200}
                    width={200}
                />

                <LinkWrapper>
                    <Events>
                        <Nav name="Locks" path="/locks" />
                        <Nav name="Purchases" path="/purchases" />
                        <Nav name="XCitadel Emissions" path="/emissions" />
                    </Events>
                    <Entities>
                        <Nav name="Funding" path="/funding" />
                    </Entities>
                </LinkWrapper>

            </HeaderWrapper>
            {children}
        </>
    )

}
export default Header