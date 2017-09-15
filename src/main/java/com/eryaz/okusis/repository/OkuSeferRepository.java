package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuSefer;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuSefer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuSeferRepository extends JpaRepository<OkuSefer, Long> {

}
