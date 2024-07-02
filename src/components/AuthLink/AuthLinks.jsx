import Link from "next/link";
import styles from "./AuthLinks.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  console.log(status, "status");
  return (
    <div className={styles.authLink}>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={styles.logout}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </div>
      )}

      {/* <div className=""> */}
      <>
        {open ? (
          <ImCross className={styles.menuIcon} onClick={() => setOpen(!open)} />
        ) : (
          <GiHamburgerMenu
            className={styles.menuIcon}
            onClick={() => setOpen(!open)}
          />
        )}
      </>
      {open && (
        <div className={styles.mobileNav}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className={styles.logout}>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </div>
          )}
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default AuthLinks;
