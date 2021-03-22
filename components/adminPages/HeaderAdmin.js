import { Container, Nav, NavDropdown ,Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function HeaderAdmin () {
    return (
    <Container fluid>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link href="/">
                    <img
                        src="img/logo.svg"
                        width="60"
                        height="60"
                        alt="КГК Дистанционный портал лого"
                    />
                </Link>
            </Navbar.Brand>
            <Nav>
                <NavDropdown title="Создать">
                    <NavDropdown.Item>
                        <Link href="admin/createStudent">
                            Студента
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href="/admin/createTeaher">
                            Преподавателя
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href="/admin/createFaculty">
                            Факультет
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href="/admin/createGroup">
                            Группу
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href="/admin/createLesson">
                            Урок
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href="/admin/createShedule">
                            Расписание
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Link href='admin/teacher'>
                    <Nav.Link>
                        Группы
                    </Nav.Link>
                </Link>
                <Link href='admin/teacher'>
                    <Nav.Link>
                        Преподаватели
                    </Nav.Link>
                </Link>
                <Link href='admin/teacher'>
                    <Nav.Link>
                        Предметы
                    </Nav.Link>
                </Link>
                <Link href='admin/teacher'>
                    <Nav.Link>
                        Факультеты
                    </Nav.Link>
                </Link>
                <Link href='admin/teacher'>
                    <Nav.Link>
                        Расписание
                    </Nav.Link>
                </Link>
            </Nav>
        </Navbar>
    </Container>
    )
}