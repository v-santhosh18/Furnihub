package com.santhoshv.furnihub.repository;

import com.santhoshv.furnihub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
