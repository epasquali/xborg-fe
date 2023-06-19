import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { TOPNAVBAR_LINKS } from "../../config/navlinks";

type NavLinkProps = {
  label: string;
  url: string;
};

function NavLink({ label, url }: NavLinkProps) {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: "gray.700" }}
      href={url}
    >
      {label}
    </Link>
  );
}

type NavBarProps = {
  bgcolor: string;
  color: string;
  fontsize: string;
  links: NavLinkProps[];
};

export function NavBar({ bgcolor, color, fontsize, links }: NavBarProps) {
  return (
    <header>
      <Box bg={bgcolor} color={color} fontSize={fontsize}>
        <Flex
          maxH={"60px"}
          py={{ base: 2 }}
          px={{ base: 7 }}
          align={"center"}
          justify={"flex-end"}
        >
          <HStack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.label} label={link.label} url={link.url}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    </header>
  );
}

export function TopNavBar() {
  return (
    <NavBar
      bgcolor="gray.700"
      color="gray.50"
      fontsize="16px"
      links={TOPNAVBAR_LINKS}
    />
  );
}
