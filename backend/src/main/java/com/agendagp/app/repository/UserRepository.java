package com.agendagp.app.repository;

import com.agendagp.app.domain.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends MongoRepository<User, String>{
    
}
