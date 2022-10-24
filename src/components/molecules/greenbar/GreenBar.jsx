import Box from "../../atoms/box/Box";
import Typography from "../../atoms/typography/Typography";

export default function GreenBar(...props) {
    return (
        <div>
            <Box wrap="wrap" direction="row">
                <Box height="198px" bg="rgba(33, 170, 133, 1)" width="33%" justify="center" align="center" direction="column" >
                    <Typography fontWeight="600" color="white" text="6000" fontSize="48px" justify="center" />
                    <Typography fontWeight="600" color="white" text="pessoas impactadas
no último ano" fontSize="32px" justify="center" />
                </Box>
                <Box height="198px" bg="rgba(24, 202, 153, 1)" width="34%" justify="center" align="center" direction="column" >
                    <Typography fontWeight="600" color="white" text="5000" fontSize="48px" justify="center" />
                    <Typography fontWeight="600" color="white" text="avaliações do 
programa em 2021" fontSize="32px" justify="center" />
                </Box>
                <Box height="198px" bg="rgba(15, 224, 170, 1)" width="33%" justify="center" align="center" direction="column" >
                    <Typography fontWeight="600" color="white" text="150" fontSize="48px" justify="center" />
                    <Typography fontWeight="600" color="white" text="voluntários ativos
atualmente" fontSize="32px" justify="center"  />
                </Box>
            </Box>
        </div>
    )
}
