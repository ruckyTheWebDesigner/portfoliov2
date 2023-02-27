"use client";

import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

import logo from "../../assets/logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 80,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size='sm'>
      {link.label}
    </Anchor>
  ));

  return (
    <div>
      <Container className={classes.footer} size={"lg"}>
        <div className={classes.inner}>
          {/* <MantineLogo size={28} />
           */}
          <Image alt='logo' src={logo} width={50} height={100} />

          <Group className={classes.links}>{items}</Group>

          <Group spacing='xs' position='right' noWrap>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <FiTwitter size={18} />
            </ActionIcon>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <FiYoutube size={18} />
            </ActionIcon>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <FiInstagram size={18} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
}
