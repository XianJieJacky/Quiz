import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export default function CategoryCard(props) {
  const { name, image, onClick } = props
  return (
    <Card>
      <CardActionArea onClick={() => onClick(name)}>
        <CardContent>
          <CardMedia component="img" height={140} image={image} alt={name} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}