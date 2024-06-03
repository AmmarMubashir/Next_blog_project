import Link from "next/link";
import styles from "./AuthLinks.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const AuthLinks = () => {
  const status = "otAuthenticated";
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className={styles.authLink}>
      {status === "notAuthenticated" ? (
        <Link href="/" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={styles.logout}>
          <Link href="/" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </div>
      )}

      <div>
        <>
          {open ? (
            <ImCross
              className={styles.menuIcon}
              onClick={() => setOpen(!open)}
            />
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

            {status === "notAuthenticated" ? (
              <Link href="/">Login</Link>
            ) : (
              <div className={styles.logout}>
                <Link href="/">Write</Link>
                <span>Logout</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLinks;
