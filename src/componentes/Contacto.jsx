import './Contacto.css';

export default function FnContacto(){
    return(
        <>
            <div className='Titulo'>
                <h2>Contacto</h2>
            </div>

            <div className="containerContacto">

                <div className="redes">
                    <h3>Correo</h3>
                    <img src="https://thumbs.dreamstime.com/b/logo-de-gmail-producto-google-icono-logotipo-ilustraci%C3%B3n-vector-editorial-vinnitsa-ucrania-octubre-199405574.jpg" alt="" />
                    <p className='pCont'>Twitch@Contacto.com</p>
                </div>
                <div className="redes">
                    <h3>Twitter</h3>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///8aGhr29vb5+fkTExMqKiqkpKT8/PyLi4vu7u7e3t7x8fExMTFYWFjq6uqsrKzW1tbl5eXIyMiAgIBzc3NHR0e7u7vb29tlZWXLy8tqamojIyM+Pj60tLQ2NjaTk5NPT0+cnJwLCwt7e3tEREQfHx9wcHBWVlY/mAdlAAAIGUlEQVR4nO2d6VrbPBCFsxMCKaUsLTRAQgrt/V/ht7jxmcjWWJolPOLR+7Muik4YWzqaGTOajD47VWH5VIXlUxWWT1VYPlVh+VSF5VMVlk9VWD5VYflUheVTFZZPVVg+VWH5VIXlUxWWT1VYPlVh+VSF5VMVlk9VWD5VYflUheVTFZZPtsLJejHMxm5+7Zgve+EIuT+wns6GWT7JZtPhrf208XfhEPlR+mucwDfhdAIWl+2IF9IxBPfhTYrEM+mEjrhox7sUjyFQOL9klLV8EU8JPLajKcJe8iz9maLwSjyllmeT70u0WjzHhYFn+aQazjHWrWIY2Xq4SpH4oJjWv9xhJNVNLVO4S1E408yLfoR0nWgQ7mm+th+/uj0/5sZkZutpO8wPxTAj+a7tWzuB8/ASHrV34mntr9pBrubiUf5HqvAeQRQ+yL8gTsW7t+t2jOWLdIy/iHfe23YOnd0GQvhROPh3fH/qdVXuLfA1v4aXmBBO4hUC5YF+QK5wjWncB5dICK8FI5Odr8HmT+EPsSJ39tn4JQgehLiPletEg8YBI06/hpewZd7mjvq+bH/2WjG5Fo3CCeYS7l9e4iE8wB77pZXQ8waz1PwwNlaX4WSYEOZBYMzeNXNr0Z3T4KneuWOYEE4b0cR/jbQKiVX8HVxazCRTPYPAX6qZAeVZ2wNiKoxTPPPT/TnxE51FVor2NBFW8Sa8hC14qlU0Xica1OelePSFNnUPe/Azaagn43WiQa0Q3/sy3L/8Rpym+IM58RPaWRH0Z95n8S8eD8ZOCPfwo/3fU8leL4bBqT722dvwEkJ4+MlIDil3+kkBA4VPmFro5UgID1lFsk7o/QTFIjPDWEUmhI+5hcCtwZQIJrkn3EFSq+iyTjSYKCRWMbyF3uIhTPBZJxps8oeIsc5zHiHMWEVs/oxSOgSjDCkyDJ39CxPC3f9iuk40GCncYP8SWkUSgZFVgKwTmWYyBassN9m/hJdgFfu3KuTcKTQoFpjl8RmriBDus4okAbO1mgzFrlIhftS9R5x2rSL8V55VTsZOIaY6DfcvsIqdo5cXqJceHw9gWG3yHJ9r1CpOPNeJvx9hOBbcT2gVJzGriHVipkzARLFUuMMtFcbpQ78S33WiwbQmijnq7g1hpHC0CWMG26qvPKvovU402CokVvEtuPQHcbpo/sV9nWgwrtzLsIrk4N9pnWiwrk3EUXcnMXacrdn4rxMN1grX8X32cWKcFHT5VoCajw6ruAov4VF7QdaJpds60WD//SVZRfwGE0+L5ThESDyruBh30RR0JeGgkFjFcPTbjkDPdaLB4y5PsooNKWfhSjwUzrF/Ca0iOe1onjj+uDypsVtZhn7wjgq8tKt4j+OzFmFLzWRrxjP7g7UenFZbWMXwqJtkFWUFU7k4KdwhTsOjbnLacZJ2Fq8PMcsqqnH7GpmqqHhi3AM3hUlWsZMYd8DvVmCqopKzihY43uyMVWROO8xxVPiOOA2tIpMYN8fzgU2OusNLzGmHNa5LElMVxYSwMa4K3+NVUeS044/nFLy7ZGEVp+EWnEmM2+K8cWL2L/mFfTK8t4bxqiiSrTGqle3HWyGpiloEl5jEuCXu2/skq2hdJUTxNzDOPWCD+CskPbVhDxjJKvqdZ7grJI2EHj1gw7grxHnGuGefjRB2s4reCq/HR4RWcYdL4aPWipOt+A0fYBV9Fb6OQzqn+O5W0VVh3ys0OoV9uOSTZvNUSAp/cTsyVtEnF+zp8dH5dD1ietidraKfwuNGwn28AHUxWICqwk8haST870OYo27mtMMAN4VknWhMvGkPWAZeCsk6cTCGSVbRvvrLSSG833h7+DemgYZpt1XjoxDn9jTuPiZb46IwVvhr1AOWh0seP9ZImNYDZjwlD4VYJ8IGEaYA1c0qOigk60Rnp8k00MRrqHXYKySNhN0GkZekwj7TbI25QuIn+ioRmAYa1etC4lgrJH6if3/CNNAgMW7WjD8yVzjcSDiJp2SYxLgCY4VY1qJmL6kHzNAq2iokjYTxgyVxD5gMU4XcOgGY14VsuB4wIZYKiZ9gC39xCt6xig5ZRUOF6Q3nkh4wMXYKyToxeBPF9y/z3NeFDGKmMKuRcIdvI7SKCGHdmyVbrBTO8974y1hF5rRDhJVC4ieSGglPl1U0UpjdSEjetcC8WdIiW2OjkPiJ1KOkpDdLWmRrTBSSRsL0yuakwj6DQmkLhbJGQubNkjtc0ltFA4WkgCvr6cfsX2gPmBa9Qnkjoe51IanoFcK3rjIbzidIToXPJ+aNN7moFWoaCe/iX46dVdQqJA3ngn3kKayiUiHxE5IzQPM3S/agU0jqnWTfNDnqDuOUZGtUc1QpvBeuE4Qkq6gq7FO9ZRfnTvJli2mgQZxqrKJGITZXK3nh3Q5xGjbQMKcdGSh+9DE+txywf/GxinKFZJ3QPeyYHjCLbI1YodFfEBmxVpGEsNgqShUSP6Gu8yFVUa9nR7zi9yu2ikKF5Hs3OE3BPptBahVlCkmFk4UN36Qo7IRwIjKFxE+YHBJ037XQg3DNFU2QrBNG6dqkvwMms4oShWbrBAjetRBBZBUFCvHoM6wp8Ps7YPkKyVwsk9FhRXgvEgOTrfBpemBm28tzNR1mKehVzFY4mcwP5H8ayzwBwU11khc3fChVYflUheVTFZZPVVg+VWH5VIXlUxWWT1VYPlVh+VSF5VMVlk9VWD5VYflUheVTFZZPVVg+VWH5VIXlUxWWT1VYPlVh+VSF5fP5FW4mn5x/AHXNUXHYIDiwAAAAAElFTkSuQmCC" alt="" />
                    <p className='pCont'>@Twitch</p>
                </div>
                <div className="redes">
                    <h3>LikedIn</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/910/721/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg" alt="" />
                    <p className='pCont'>LinkedIn.com/Twitch</p>
                </div>

            </div>

        </>
    );
}