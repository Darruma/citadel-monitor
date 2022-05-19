import styled from 'styled-components'
const Events = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
`
const Entities = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;

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
    justify-content: space-around;
    width: 100%;
`

function Logo() {
    return <div>
        CitadelDao
    </div>
}

function Header({ children }) {
    return (
        <>
            <HeaderWrapper>
                <Logo></Logo>
                <LinkWrapper>
                    <Events>
                        <div>
                            Locks
                        </div>
                        <div>
                            Purchases
                        </div>

                        <div>
                            XCitadel Emission
                        </div>
                    </Events>
                    <Entities>
                        <div>Locker</div>
                        <div>Funding</div>
                    </Entities>
                </LinkWrapper>

            </HeaderWrapper>
            <div>
                {children}
            </div>
        </>
    )

}
export default Header