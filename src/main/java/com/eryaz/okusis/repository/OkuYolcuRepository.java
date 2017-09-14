package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuYolcu;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuYolcu entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuYolcuRepository extends JpaRepository<OkuYolcu, Long> {

}
