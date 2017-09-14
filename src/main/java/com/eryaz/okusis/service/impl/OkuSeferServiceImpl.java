package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuSeferService;
import com.eryaz.okusis.domain.OkuSefer;
import com.eryaz.okusis.repository.OkuSeferRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing OkuSefer.
 */
@Service
@Transactional
public class OkuSeferServiceImpl implements OkuSeferService{

    private final Logger log = LoggerFactory.getLogger(OkuSeferServiceImpl.class);

    private final OkuSeferRepository okuSeferRepository;
    public OkuSeferServiceImpl(OkuSeferRepository okuSeferRepository) {
        this.okuSeferRepository = okuSeferRepository;
    }

    /**
     * Save a okuSefer.
     *
     * @param okuSefer the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuSefer save(OkuSefer okuSefer) {
        log.debug("Request to save OkuSefer : {}", okuSefer);
        return okuSeferRepository.save(okuSefer);
    }

    /**
     *  Get all the okuSefers.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<OkuSefer> findAll() {
        log.debug("Request to get all OkuSefers");
        return okuSeferRepository.findAll();
    }

    /**
     *  Get one okuSefer by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuSefer findOne(Long id) {
        log.debug("Request to get OkuSefer : {}", id);
        return okuSeferRepository.findOne(id);
    }

    /**
     *  Delete the  okuSefer by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuSefer : {}", id);
        okuSeferRepository.delete(id);
    }
}
