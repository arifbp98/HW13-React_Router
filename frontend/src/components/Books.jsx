import { Card, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card key={id} my={4} p={4} w="220px" variant="outline" boxShadow="rgba(0, 0, 0, 0.68) 3px 5px 10px -5px">
        <VStack>
          <Heading size={"md"} noOfLines={1}>
            {title} ({year})
          </Heading>
          <Divider />
          <Text>{author}</Text>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
          <Text>{publisher}</Text>
        </VStack>
      </Card>
    </Link>
  );
}
